//following hardhat tutorial, but without the token.sol contract

const { expect } = require("chai");

//fixtures allow for easy setup 
const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Token contract", function () {


    //more efficient to use fixtures for tests
    async function deployTokenFixture() {

        const [owner, addr1, addr2] = await ethers.getSigners();
        ethers.provider

        const hardhatToken = await ethers.deployContract("Token");

        // Fixtures can return anything you consider useful for your tests
        return { hardhatToken, owner, addr1, addr2 };

    }

    //more efficient to load fixtures for tests
    it("", async function() {
        const { hardhatToken, owner } = await loadFixture(deployTokenFixture);

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    });



    it("Deployment should assign the total supply of tokens to the owner", async function () {
        
        
        //Signer represents Ethereum account, here we are getting first signer
        const [owner] = await ethers.getSigners();

        //deploys contract and returns an object of it
        const hardhatToken = await ethers.deployContract("Token");

        //calling a method within token.sol contract
        const ownerBalance = await hardhatToken.balanceOf(owner.address);


        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });


});