import express from 'express'
import router from './router/insetos.js'

const app = express()

app.use(router)
app.use(express.json())

app.listen(3000,() => {console.log("Servidor funcionado")})