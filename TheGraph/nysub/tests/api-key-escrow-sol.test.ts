import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BuyOrderEvent } from "../generated/schema"
import { BuyOrderEvent as BuyOrderEventEvent } from "../generated/APIKeyEscrow.sol/APIKeyEscrow.sol"
import { handleBuyOrderEvent } from "../src/api-key-escrow-sol"
import { createBuyOrderEventEvent } from "./api-key-escrow-sol-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let orderNumber = BigInt.fromI32(234)
    let buyer = Address.fromString("0x0000000000000000000000000000000000000001")
    let startTime = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let duration = BigInt.fromI32(234)
    let newBuyOrderEventEvent = createBuyOrderEventEvent(
      orderNumber,
      buyer,
      startTime,
      price,
      duration
    )
    handleBuyOrderEvent(newBuyOrderEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BuyOrderEvent created and stored", () => {
    assert.entityCount("BuyOrderEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BuyOrderEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "orderNumber",
      "234"
    )
    assert.fieldEquals(
      "BuyOrderEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BuyOrderEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTime",
      "234"
    )
    assert.fieldEquals(
      "BuyOrderEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "BuyOrderEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "duration",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
