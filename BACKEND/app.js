import express from 'express'
import cors from 'cors'
import { getExpense, getExpenses, createExpense } from './database.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get("/expenses", async (req,res) => {
    const expenses = await getExpenses()
    res.send(expenses)
})

app.get("/expenses/:id", async (req,res) => {
    const id = req.params.id
    const expenses = await getExpense(id)
    res.send(expenses)
})

app.post("/expenses", async (req,res) => {
    const {id,title,amount,date} = req.body
    const expenses = await createExpense(id,title,amount,date)
    res.status(201).send(expenses)
})

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke')
})

app.listen(8080, () => {
    console.log(`Server is running on https://localhost:8080/`);
})