import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import userRoutes from "./routes/users.js"

dotenv.config();
const app = express()

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());


app.use(userRoutes)

const PORT = 3000
const mongoDB = process.env.MONGO_DB

app.listen(PORT, () => {
    mongoose.connect(mongoDB).then(() => {
        console.log("DB conexão estabelecida");
        console.log(`Servidor rodando na porta ${PORT}`)
    }).catch((err) => {
        console.error("Erro na conexão com MongoDB:" , err.message)
    })
})