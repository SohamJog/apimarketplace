const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("APIKeyEscrow", function() {

    async function deployContractFixture() {
        const [buyer, seller] = await ethers.getSigners();

        console.log(ethers);

        const APIKeyEscrowFactory = await ethers.getContractFactory("APIKeyEscrow");
        const api_escrow_contract = await APIKeyEscrowFactory.deploy();

        return api_escrow_contract, buyer, seller;
    }

    async function orderAlreadyBoughtFixture() {
        const { api_escrow_contract, buyer, seller } = await loadFixture(deployContractFixture);

        orderNumber = 0 //0 is the first order number when contract is initalized

        orderPrice = 2

        orderDuration = 100000

        api_escrow_contract.sellMessage(
            orderPrice, //price
            orderDuration //duration (in seconds)
        );

        api_escrow_contract.connect(seller).buyMessage(
            orderNumber, //order number
            {value: 1}
        );

        return api_escrow_contract, buyer, seller, orderNumber, orderPrice, orderDuration;
    }

    describe("Cancel Order", function() {
        it("Should splt up funds between buyer and seller depending on time left in period",
            async function() {
                const { 
                    api_escrow_contract, 
                    buyer, 
                    seller, 
                    orderNumber,
                    orderPrice,
                    orderDuration
                } = await loadFixture(orderAlreadyBoughtFixture);

                percent_time_passed = 0.5

                //fast forward time
                one_hour = 60*60;
                time.increase(percent_time_passed*orderDuration + one_hour);
                
                //in this scenario, buyer and seller should each get 50% of the money
                expected_seller_amount = Math.trunc(percent_time_passed*orderPrice);
                expected_buyer_amount = Math.trunc((1-percent_time_passed)*orderPrice);

                expect(api_escrow_contract.cancelOrder(orderNumber)).to.changeEtherBalances(
                    [buyer, seller],
                    [expected_buyer_amount, expected_seller_amount]
                );



            }
        )
    })


})
