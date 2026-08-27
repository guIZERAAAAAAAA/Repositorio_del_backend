import express from 'express' 
import insetario from '../repository/insetos.js'
import ControllerInsetos from '../controller/insetos.js'

const router = express.Router()

router.get("/Buscar", ControllerInsetos.Buscar)

router.get("/Detalhe/:id", ControllerInsetos.Detalhe)

router.post("/criar", ControllerInsetos.Criar)

router.post("/Aleterar", ControllerInsetos.Alterar)

router.post("/Deletar", ControllerInsetos.Deletar)

export default router




