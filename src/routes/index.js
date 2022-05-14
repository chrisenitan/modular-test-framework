import express from 'express'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const appRoute = express()
const __filename = fileURLToPath(import.meta.url)
appRoute.set('views', './src/views')

//load test builder
appRoute.get('/', (req, res) => {
    const content = req.content
    console.log(content);
    res.render('index', content)
})

//parse and save test requests
appRoute.post('/', (req, res) => {
    let result = { primaryMessage: '' }
    if (!req.body) return (result.primaryMessage = 'There was an error parsing your input')

    //read existing file
    const actionDataFilePath = path.join(path.dirname(__filename), '../../test', 'memory/actionRequests.json')

    //single requests are strings
    let newRequest
    if (Array.isArray(req.body.actions)){
        newRequest = [...req.body.actions]
    } else {
        newRequest = [req.body.actions]
    }

    //create request
    const newActionRequest = {
        [`${req.body.apps}`]: newRequest
    }

    //save new request to file
    writeFileSync(actionDataFilePath, JSON.stringify(newActionRequest))
    console.log('Updated action request file')
    console.log(newActionRequest)

    Object.assign(result, {
        primaryMessage: 'Your test scenario was created. Run `npm test`',
        ...req.content
    })
    res.render('index', result)
})

export { appRoute }
