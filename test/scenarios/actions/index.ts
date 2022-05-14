import { coffeePayInternalActions } from './coffeePayInternalActions'
import { coffeePayExternalActions } from './coffeePayExternalActions'

export const coffeePay = {
    ...coffeePayInternalActions,
    ...coffeePayExternalActions
}
