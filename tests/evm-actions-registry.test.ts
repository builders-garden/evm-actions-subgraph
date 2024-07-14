import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ActionAdded } from "../generated/schema"
import { ActionAdded as ActionAddedEvent } from "../generated/EVMActionsRegistry/EVMActionsRegistry"
import { handleActionAdded } from "../src/evm-actions-registry"
import { createActionAddedEvent } from "./evm-actions-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let actionBaseUrl = "Example string value"
    let actionOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let status = 123
    let newActionAddedEvent = createActionAddedEvent(
      actionBaseUrl,
      actionOwner,
      status
    )
    handleActionAdded(newActionAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ActionAdded created and stored", () => {
    assert.entityCount("ActionAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ActionAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "actionBaseUrl",
      "Example string value"
    )
    assert.fieldEquals(
      "ActionAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "actionOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ActionAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "status",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
