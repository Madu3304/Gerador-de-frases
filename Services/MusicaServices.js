import { getMusica } from "../Controllers/MusicaController.js"
import express from "express"
import cors from "cors" 

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())


app.get('/getMusica/:artist', getMusica)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})