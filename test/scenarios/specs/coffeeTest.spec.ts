import { globalHelper } from '../../helper'

describe('TEST IN MODULES', () => {
    it(`Test Scenario`, async () => {
        const actions = globalHelper.getActions('coffeePay')
        for (const element of actions) {
            const currentAction = globalHelper.translateAction(element)

            const attributes = globalHelper.readTransaction()

            const { functionMessage, coffeeName, coffeeLastOdered, coffeeTotalOrdered, uniqueId } = await globalHelper.executeAction(
                attributes,
                currentAction
            )

            globalHelper.writeTransaction({ coffeeName, coffeeLastOdered, coffeeTotalOrdered, uniqueId })

            console.log(`${functionMessage}: ${coffeeName} : ${uniqueId}`)
        }
        //needs a helper to handle teardown
    })
})
