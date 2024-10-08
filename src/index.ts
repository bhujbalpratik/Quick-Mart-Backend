import express from "express"
import cors from "cors"
import "dotenv/config"
import { connectToDatabase } from "./database/connection"

connectToDatabase()
const app = express()
app.use(cors())

app.listen(process.env.PORT, () =>
  console.log(`server is working on port : ${process.env.PORT}`)
)
