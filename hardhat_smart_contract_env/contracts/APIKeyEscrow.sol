pragma solidity ^0.8.0;

//testing still needed for all functions and events!!!!!

contract APIKeyEscrow {

    uint public orderNumber = 0; //stores the id/number for the next order
    //we can't use hashes as keys/ids for the Orders because, under the current
    //order structure, it is possible to create two orders with the same hash
    //and we would waste gas trying to create a storage field that makes each order unique

	struct Order {
		address buyer;
		address seller;
		uint256 price;
		uint256 duration; //difference between start time and end time in seconds
		uint256 startTime;  //timestamp
    }

    //user gets an array of their orders, represented by hashes
    //we need two separate mappings because both the buyer and seller address need to
    //link to the same Order in storage, so both buyer and seller will map to the same hash in first
    //mapping, then hash will link to the actual order
    //list of orders belonging to the address, whether they bought or sold
    mapping(address => uint[]) public listOfOrders; 
    mapping(uint => Order) public orderMap;

    event SellOrderEvent(
        uint256 orderNumber,
        address seller,
        uint256 price,
        uint256 duration
    );

    event BuyOrderEvent(
        uint256 orderNumber,
        address buyer,
        uint256 startTime
    );

    event CancelOrderEvent(
        uint256 orderNumber,
        address withdrawer, 
        uint256 ethToBuyer, 
        uint256 ethToSeller, 
        uint256 withdrawTime
    );

    constructor() {}

    function sellMessage(uint256 price, uint256 duration) external {
        require(price != 0);
        require(duration != 0);

        orderMap[orderNumber].seller = msg.sender;
        orderMap[orderNumber].price = price;
        orderMap[orderNumber].duration = duration;
        
        if (listOfOrders[msg.sender].length == 0) {
            listOfOrders[msg.sender] = new uint256[](0);
        } 
        listOfOrders[msg.sender].push(orderNumber);
       
        
        emit SellOrderEvent(
            orderNumber,
            msg.sender,
            price,
            duration
        );

        //if this were to overflow, it should fail and revert the entire smart contract
        //which is why its probably safe to emit the Event before then to save gas
        orderNumber += 1;
    }

    //this will accept the Eth from the buyer, but won’t send it to the seller
    //the record keeping of the eth spent will exist in the price value of order
    //the record keeping that the order was bought will exist with the non-null value of the buyer
    function buyMessage(uint _orderNumber) payable external {
        
        require(orderMap[_orderNumber].price != 0, "Order does not exist or was withdrawn");
        require(orderMap[_orderNumber].buyer == address(0), "Order already bought.");
        require(msg.value == orderMap[_orderNumber].price, "Eth sent is the incorrect amount");
        orderMap[_orderNumber].buyer = msg.sender;
        uint256 startTime = block.timestamp + 1 hours;
        orderMap[_orderNumber].startTime = startTime;
        //we add one hour so that buyer has 1 hour to wait to receive the api key
        //if the buyer does not receive the api key, they can withdraw the order
        //and get all of their money back, minus the transaction fees

        emit BuyOrderEvent(
            _orderNumber,
            msg.sender,
            startTime
        );

    }

    
    //works for if seller withdraws order, before or after duration ends or begins
    //works for if buyer withdraws order, before or after duration ends or begins
    function cancelOrder(uint _orderNumber) external payable {
        
        //this should create a storage pointer, which, to my knowledge, is cheaper
        //than storing the struct in memory
        
        bool authorizedAccess = msg.sender == orderMap[_orderNumber].buyer || 
            msg.sender == orderMap[_orderNumber].seller;
        
        require(authorizedAccess, "You are not the buyer or seller of this order");
        require(orderMap[_orderNumber].price != 0, "Order already withdrawn!");
        require(orderMap[_orderNumber].buyer != address(0), "Order never bought.");

        
        
        uint256 percentageSellerTime;
        uint256 ethToSeller;
        uint256 ethToBuyer;
        if (block.timestamp < orderMap[_orderNumber].startTime) { // scenario if buyer withdraws before order starts because they haven't received an API key
            percentageSellerTime = 0;
            ethToBuyer = orderMap[_orderNumber].price;
            ethToSeller = 0;
        } else  {
            uint256 durationUsed = uint256 (block.timestamp)-orderMap[_orderNumber].startTime;
            if (uint256(durationUsed) > orderMap[_orderNumber].duration) { //scenario if seller cancels order after period/order has ended
                percentageSellerTime = 1;
                ethToSeller = orderMap[_orderNumber].price;
                ethToBuyer = 0;
            } else { //scenario if buyer or seller withdraws order before period ended

                
                //these calculations should preserve decimals until storage/memory, at which point it is truncated
                //we have to do everything in one line 
                //https://docs.soliditylang.org/en/develop/types.html#rational-and-integer-literals
                // "Division on integer literals used to truncate in Solidity prior to version 0.4.0, but it now converts into a rational number, i.e. 5 / 2 is not equal to 2, but to 2.5."
                ethToSeller = orderMap[_orderNumber].price * (uint256(durationUsed) / (orderMap[_orderNumber].duration));
                ethToBuyer = orderMap[_orderNumber].price * (1 - (uint256(durationUsed) / (orderMap[_orderNumber].duration)));

                //New method (instead of ufixed)
                //all decimals produced by the above equations should be truncated, so no worry about the problem below...

                    //lets say there is 33% used and 67% unused, the price is 10
                    //33%*price = 3.333333…. Or 3.33334, if we round down or truncate value to two decimal 
                    //places
                    //67%*price = 6.666666… or 6.667%, 
                    //3.34+6.67 = 10.01 which is greater than 10
                    //to prevent contract from overspending, we round dconvert uintown and then keep the extra money in 
                    //the smart contract

            }
        }

        

        require(ethToBuyer + ethToSeller == orderMap[_orderNumber].price, "Price didn't add up properly");
        require(ethToBuyer + ethToSeller <= address(this).balance, "Contract does not have enough balance");


        //transfer will revert entire execution if transaction fails, compared to send()
        if (ethToBuyer != 0) {
            payable(orderMap[_orderNumber].buyer).transfer(ethToBuyer);
        }
        if (ethToSeller != 0) {
            payable(orderMap[_orderNumber].seller).transfer(ethToSeller);
        }
       

        orderMap[_orderNumber].price = 0;
        //or, we delete the whole order data altogether...

        emit CancelOrderEvent(
            _orderNumber,
            msg.sender,
            ethToBuyer,
            ethToSeller,
            block.timestamp
        );

    }

    //ufixed is not implemented in solidity compiler yet
    // function divideUInt256ToDecimal(uint256 a, uint256 b) pure internal returns (ufixed256x8) {
            //256 represents bits taken by type and 8 represents the decimal places
    //     return ufixed256x8 (a / b);
    // }

    // function multiplyDecimalAndCastToUInt256(ufixed256x8 a, uint256 b) pure internal returns (uint256) {
    //     return uint256 (a* ufixed256x8 (b));
    // }

    function getOrderNextNumber() public view returns (uint) {
        return orderNumber;
    }

    function getOrder(uint _orderNumber) public view returns (Order memory) {
        return orderMap[_orderNumber];
    }

    function getAddressOrder(address user) public view returns (uint256[] memory) {
        return listOfOrders[user];
    }

}

