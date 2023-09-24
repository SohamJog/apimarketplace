import {
  BuyOrderEvent as BuyOrderEventEvent,
  CancelOrderEvent as CancelOrderEventEvent,
  SellOrderEvent as SellOrderEventEvent
} from "../generated/APIKeyEscrow.sol/APIKeyEscrow"
import {
  BuyOrderEvent,
  CancelOrderEvent,
  SellOrderEvent
} from "../generated/schema"

export function handleBuyOrderEvent(event: BuyOrderEventEvent): void {
  let entity = new BuyOrderEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderNumber = event.params.orderNumber
  entity.buyer = event.params.buyer
  entity.startTime = event.params.startTime
  entity.price = event.params.price
  entity.duration = event.params.duration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelOrderEvent(event: CancelOrderEventEvent): void {
  let entity = new CancelOrderEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderNumber = event.params.orderNumber
  entity.withdrawer = event.params.withdrawer
  entity.ethToBuyer = event.params.ethToBuyer
  entity.ethToSeller = event.params.ethToSeller
  entity.withdrawTime = event.params.withdrawTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellOrderEvent(event: SellOrderEventEvent): void {
  let entity = new SellOrderEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderNumber = event.params.orderNumber
  entity.seller = event.params.seller
  entity.price = event.params.price
  entity.duration = event.params.duration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
