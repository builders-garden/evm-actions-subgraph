import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  ActionAdded,
  ActionConfirmed,
  ActionRemoved
} from "../generated/EVMActionsRegistry/EVMActionsRegistry"

export function createActionAddedEvent(
  actionBaseUrl: string,
  actionOwner: Address,
  status: i32
): ActionAdded {
  let actionAddedEvent = changetype<ActionAdded>(newMockEvent())

  actionAddedEvent.parameters = new Array()

  actionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "actionBaseUrl",
      ethereum.Value.fromString(actionBaseUrl)
    )
  )
  actionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "actionOwner",
      ethereum.Value.fromAddress(actionOwner)
    )
  )
  actionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return actionAddedEvent
}

export function createActionConfirmedEvent(
  actionBaseUrl: string
): ActionConfirmed {
  let actionConfirmedEvent = changetype<ActionConfirmed>(newMockEvent())

  actionConfirmedEvent.parameters = new Array()

  actionConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "actionBaseUrl",
      ethereum.Value.fromString(actionBaseUrl)
    )
  )

  return actionConfirmedEvent
}

export function createActionRemovedEvent(actionBaseUrl: string): ActionRemoved {
  let actionRemovedEvent = changetype<ActionRemoved>(newMockEvent())

  actionRemovedEvent.parameters = new Array()

  actionRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "actionBaseUrl",
      ethereum.Value.fromString(actionBaseUrl)
    )
  )

  return actionRemovedEvent
}
