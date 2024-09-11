import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express()
app.use(cors())

app.listen(process.env.PORT, () =>
  console.log(`server is working on port : ${process.env.PORT}`)
)
