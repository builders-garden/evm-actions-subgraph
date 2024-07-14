import {
  ActionAdded as ActionAddedEvent,
  ActionConfirmed as ActionConfirmedEvent,
  ActionRemoved as ActionRemovedEvent
} from "../generated/EVMActionsRegistry/EVMActionsRegistry"
import {
  ActionAdded,
  ActionConfirmed,
  ActionRemoved
} from "../generated/schema"

export function handleActionAdded(event: ActionAddedEvent): void {
  let entity = new ActionAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.actionBaseUrl = event.params.actionBaseUrl
  entity.actionOwner = event.params.actionOwner
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleActionConfirmed(event: ActionConfirmedEvent): void {
  let entity = new ActionConfirmed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.actionBaseUrl = event.params.actionBaseUrl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleActionRemoved(event: ActionRemovedEvent): void {
  let entity = new ActionRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.actionBaseUrl = event.params.actionBaseUrl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
