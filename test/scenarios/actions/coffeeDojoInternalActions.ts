//your internal logic processes if needed
export const coffeePayInternalActions = {
    getFavCoffee: () => {
        return { coffeeName: 'deus', coffeeLastOrdered: '10-12-2022', coffeeTotalOrdered: '1234' }
    },
    getCoffeeToken: () => {
        return { coffeeToken: 'hsjfhsbfhksfjfk' }
    },
    payToken: (token: string) => {
        if (token) return 'paid'
    }
}
