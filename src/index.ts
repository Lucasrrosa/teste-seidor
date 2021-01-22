import express from 'express'
import bodyParser, { json } from 'body-parser'
import { AutomovelRouter } from './modules/automovel/AutomovelRouter'
import { MotoristaRouter } from './modules/motorista/MotoristaRouter'
import { UtilizacaoAutoRouter } from './modules/utilizacao-auto/UtilizacaoAutoRouter'

const app = express()

const PORT = 8000
const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use('/automovel', AutomovelRouter)
app.use('/motorista', MotoristaRouter)
app.use('/utilizacao-auto', UtilizacaoAutoRouter)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})