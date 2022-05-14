//your exposed processes shipped to the global action list
import { coffeePayInternalActions } from './coffeeDojoInternalActions'

const coffeePayExternalActions = {
    chooseFavCoffee: async () => {
        const { coffeeName, coffeeLastOrdered: coffeeLastOrdered, coffeeTotalOrdered } = coffeePayInternalActions.getFavCoffee()

        return {
            transactionType: 'coffeeOrder',
            uniqueId: 'some-rand-id',
            functionMessage: 'Can choose a favorite coffee',
            coffeeName,
            coffeeLastOrdered,
            coffeeTotalOrdered
        }
    },

    payForCoffee: async (attributes: paymentTransaction) => {
        const { coffeeToken } = coffeePayInternalActions.getCoffeeToken()
        coffeePayInternalActions.payToken(coffeeToken)

        //notice our payment action knows which action to update
        //this can be used for running multiple action categories per session
        attributes.coffeeOrder.functionMessage = 'Can pay for coffee'

        return attributes.coffeeOrder
    },

    submitFeedback: async () => {
        //more product logic, try add something
    },

    getAnExtraCup: async () => {
        //more product logic, try add something
    }
}

export { coffeePayExternalActions }
