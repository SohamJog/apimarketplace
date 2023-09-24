const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("APIKeyEscrow", function() {

    async function deployContractFixture() {
        const [seller, buyer] = await ethers.getSigners();

        const APIKeyEscrowFactory = await ethers.getContractFactory("APIKeyEscrow");
        const apiEscrowContract = await APIKeyEscrowFactory.deploy();

        return {apiEscrowContract, buyer, seller};
    }

    async function orderAlreadyBoughtFixture() {
        const { apiEscrowContract, seller, buyer } = await loadFixture(deployContractFixture);

        const orderNumber = 0 //0 is the first order number when contract is initalized

        const orderPrice = 100

        const orderDuration = 100000
        

        await apiEscrowContract.sellMessage(
            orderPrice, //price
            orderDuration //duration (in seconds)
        );

        await apiEscrowContract.connect(buyer).buyMessage(
            orderNumber, //order number
            {value: orderPrice}
        );

        return {apiEscrowContract, buyer, seller, orderNumber, orderPrice, orderDuration};
    }

    describe("Cancel Order", function() {

        describe("Partial Payouts", function() {

            async function testCancelOrder(percentTimePassed) {

                one_hour = 60*60;
                const {
                    apiEscrowContract, 
                    buyer, 
                    seller, 
                    orderNumber,
                    orderPrice,
                    orderDuration
                } = await loadFixture(orderAlreadyBoughtFixture);

                await time.increase((percentTimePassed*orderDuration) + one_hour);

                //we are using BigInt to avoid floating point errors, which did affect the tests!
                expectedSellerAmount = //Math.trunc(percentTimePassed*orderPrice)
                    Number(
                        (
                            (
                                BigInt(percentTimePassed*1000)
                            )*BigInt(orderPrice)
                        )/BigInt(1000)
                    );
                expectedBuyerAmount = 
                    Number(
                        (
                            (
                                BigInt(1000) - BigInt(percentTimePassed*1000)
                            )*BigInt(orderPrice)
                        )/BigInt(1000)
                    );

                await expect(apiEscrowContract.cancelOrder(orderNumber)).to.changeEtherBalances(
                    [buyer, seller],
                    [expectedBuyerAmount, expectedSellerAmount]
                );
            }

            it("Should split up funds depending on time left in period: Seller-Buyer 50-50",
                async function() {
                    durationPassedPercentage = 0.5
                    await expect(await testCancelOrder(durationPassedPercentage))
                }
            )

            it("Should split up funds depending on time left in period: Seller-Buyer 80-30",
                async function() {
                    durationPassedPercentage = 0.8
                    await expect(await testCancelOrder(durationPassedPercentage))
                }
            )

            it("Should split up funds depending on time left in period, 33-66",
                async function() {
                    durationPassedPercentage = 0.33
                    await expect(await testCancelOrder(durationPassedPercentage))
                }
            )
        })


    })


})
