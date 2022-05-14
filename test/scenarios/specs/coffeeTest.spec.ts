import { globalHelper } from '../../helper'

describe('TEST IN MODULES', () => {
    it(`Test Scenario`, async () => {
        const actions = globalHelper.getActions('coffeeDojo')
        for (const element of actions) {
            const currentAction = globalHelper.translateAction(element)

            const attributes = globalHelper.readTransaction()

            const { functionMessage, coffeeName, coffeeLastOrdered, coffeeTotalOrdered, uniqueId, transactionType } =
                await globalHelper.executeAction(attributes, currentAction)

            globalHelper.writeTransaction({ coffeeName, coffeeLastOrdered, coffeeTotalOrdered, uniqueId, transactionType })

            console.log(`${functionMessage}: ${coffeeName} : ${uniqueId}`)
        }
        //needs a helper to handle teardown
    })
})
