//private
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)

const customModules = {
    urlLog: (req, res, next) => {
        let url = `${req.protocol}://${req.get('host')}${req.originalUrl}`
        console.log(`\x1b[34m Route hit: ${url} \x1b[0m`)
        next()
    },
    pageDefault: (req, res, next) => {
        const actionDataFilePath = path.join(path.dirname(__filename), '../../test', 'dictionary/availableActions.json')
        const content = JSON.parse(readFileSync(actionDataFilePath, 'utf-8'))
        req.content = content
        next()
    }
}

export { customModules }
