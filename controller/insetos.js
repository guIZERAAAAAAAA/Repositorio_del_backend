import insetario from "../repository/insetos.js";

class ControllerInsetos {

Buscar  (req,res ) {
    try {
        const insetos = ControllerInsetos.Buscar()

        res.send({message : insetos})
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

Detalhe () {}

Criar   () {}

Alterar () {}

Deletar () {}

}

export default new ControllerInsetos