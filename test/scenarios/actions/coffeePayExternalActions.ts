//yoru exposed processes shipped to the global action list
import { coffeePayInternalActions } from './coffeePayInternalActions'

const coffeePayExternalActions = {
    chooseFavCoffee: async () => {
        const { coffeeName, coffeeLastOdered, coffeeTotalOrdered } = coffeePayInternalActions.getFavCoffee()

        return {
            uniqueId: 'some-rand-id',
            functionMessage: 'Chosen your favourite coffee',
            coffeeName,
            coffeeLastOdered,
            coffeeTotalOrdered
        }
    },

    payForCoffee: async (attributes: resolveType) => {
        const { coffeeToken } = coffeePayInternalActions.getCoffeeToken()
        coffeePayInternalActions.payToken(coffeeToken)

        attributes.functionMessage = 'Coffee paid for, pick up next'
        return attributes
    }
}

export { coffeePayExternalActions }
