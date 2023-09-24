import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BuyOrderEvent,
  CancelOrderEvent,
  SellOrderEvent
} from "../generated/APIKeyEscrow.sol/APIKeyEscrow.sol"

export function createBuyOrderEventEvent(
  orderNumber: BigInt,
  buyer: Address,
  startTime: BigInt,
  price: BigInt,
  duration: BigInt
): BuyOrderEvent {
  let buyOrderEventEvent = changetype<BuyOrderEvent>(newMockEvent())

  buyOrderEventEvent.parameters = new Array()

  buyOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "orderNumber",
      ethereum.Value.fromUnsignedBigInt(orderNumber)
    )
  )
  buyOrderEventEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  buyOrderEventEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  buyOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return buyOrderEventEvent
}

export function createCancelOrderEventEvent(
  orderNumber: BigInt,
  withdrawer: Address,
  ethToBuyer: BigInt,
  ethToSeller: BigInt,
  withdrawTime: BigInt
): CancelOrderEvent {
  let cancelOrderEventEvent = changetype<CancelOrderEvent>(newMockEvent())

  cancelOrderEventEvent.parameters = new Array()

  cancelOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "orderNumber",
      ethereum.Value.fromUnsignedBigInt(orderNumber)
    )
  )
  cancelOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawer",
      ethereum.Value.fromAddress(withdrawer)
    )
  )
  cancelOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "ethToBuyer",
      ethereum.Value.fromUnsignedBigInt(ethToBuyer)
    )
  )
  cancelOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "ethToSeller",
      ethereum.Value.fromUnsignedBigInt(ethToSeller)
    )
  )
  cancelOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawTime",
      ethereum.Value.fromUnsignedBigInt(withdrawTime)
    )
  )

  return cancelOrderEventEvent
}

export function createSellOrderEventEvent(
  orderNumber: BigInt,
  seller: Address,
  price: BigInt,
  duration: BigInt
): SellOrderEvent {
  let sellOrderEventEvent = changetype<SellOrderEvent>(newMockEvent())

  sellOrderEventEvent.parameters = new Array()

  sellOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "orderNumber",
      ethereum.Value.fromUnsignedBigInt(orderNumber)
    )
  )
  sellOrderEventEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellOrderEventEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  sellOrderEventEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return sellOrderEventEvent
}
