import insetario from "../repository/insetos.js";

class ServiceInsetos {

Buscar  () {
return insetario
}

Detalhe (id) {

    if (!id) {
        throw new Error("favor informe o id ")
    }
    const insetos = insetario.find(it => id === id )

    if (!insetos)
    {
        throw new Error ("inseto não encontrado")
    }
    return insetos 
}


Criar   () {}

Alterar () {}

Deletar () {}

}

export default new ServiceInsetos