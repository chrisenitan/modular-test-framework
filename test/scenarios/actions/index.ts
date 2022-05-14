import { coffeePayInternalActions } from './coffeeDojoInternalActions'
import { coffeePayExternalActions } from './coffeeDojoExternalActions'

export const coffeeDojo = {
    ...coffeePayInternalActions,
    ...coffeePayExternalActions
}
