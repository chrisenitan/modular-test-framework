import { actions } from '../dictionary'
import path from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { actionRequests } from '../memory'

const transactionDataFilePath = path.join(path.dirname(__filename), '..', 'memory/transactions.json')

export const globalHelper = {
    getActions: (app: keyof typeof actionRequests): any[] => {
        const currentSteps = actionRequests[`${app}`]
        return currentSteps
    },

    translateAction: (action: keyof typeof actions) => {
        const coffeeAction = actions[`${action}`]
        return coffeeAction
    },

    executeAction: async (attributes: resolveType, callback: any) => {
        const resolve: resolveType = await callback(attributes)
        return resolve
    },

    readTransaction: () => {
        const content = JSON.parse(readFileSync(transactionDataFilePath, 'utf-8'))
        return content
    },

    writeTransaction: (request: Record<string, any>) => {
        //how you store the records is up to you. here we store the record based on id of each transaction for easier referencing
        const content = JSON.parse(readFileSync(transactionDataFilePath, 'utf-8'))
        const updates = {
            ...content,
            [`${request.transactionType}`]: { ...request }
        }
        writeFileSync(transactionDataFilePath, JSON.stringify(updates))
    },
    
    tearDown: () => {
        //can be in a after test hook
        const updates = {}
        writeFileSync(transactionDataFilePath, JSON.stringify(updates))
    }
}
