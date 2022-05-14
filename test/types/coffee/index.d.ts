type resolveType = {
    transactionType: string
    uniqueId: string
    coffeeName: string
    coffeeLastOrdered: string
    coffeeTotalOrdered: string
    functionMessage: string
    meta: Record<string, any>
}

type paymentTransaction = Record<string, Record<string, unknown>>
