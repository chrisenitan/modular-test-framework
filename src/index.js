import express from 'express'
import hjs from 'hogan-middleware'
import { customModules } from './modules/index.js'
import { appRoute } from './routes/index.js'
const app = express()


app.use(express.static('./src/public'))
app.set('view engine', 'mustache')
app.engine('mustache', hjs.__express)

//express form parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/', [customModules.urlLog, customModules.pageDefault], appRoute)

//server
const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`\x1b[32mTest UI on http://localhost:${port} \x1b[0m  \n`)
})
