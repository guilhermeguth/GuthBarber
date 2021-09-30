const clientesController = require('../controllers/clientes');

module.exports = (app) => {
    app.post('/clientes', clientesController.postClientes
        //#region Documentação
        /*  #swagger.tags = ['Clientes']
        #swagger.summary = 'Insere um cliente.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para inserir um aluno',
                type: 'json',
                schema: {
                    id: 1,
                    nome: "Guilherme Guth Zahn",
                    cpfcnpj: "073.926.459-19",
                    rginsc: "152.650.152",
                    telefone: "(49)988740497",
                    email: "guilhermeguthzgmail.com",
                    endereco: "Av. Sao Paulo",
                    numero: 2999,
                    bairro: "Pioneiro",
                    complemento: "Residencial Mantelli Apt 402-B",
                    municipio: "Pinhalzinho",
                    cep: "89870-000",
                    uf: "SC"
                }
            }
        */
        //#endregion
    )
    app.get('/clientes', clientesController.getClientes
        //#region Documentação
        /*  #swagger.tags = ['Clientes']
        #swagger.summary = 'Busca lista de Clientes.'
        */
        //#endregion
    )
    app.delete('/clientes/:id', clientesController.deleteClientes
        //#region Documentação
        /*  #swagger.tags = ['Clientes']
        #swagger.summary = 'Deleta um cliente selecionado.',
        #swagger.parameters['id'] = {
     description: "id do Cliente",
     value: "1"
}
        */
        //#endregion
    )
    app.patch('/clientes/:id', clientesController.patchClientes
        //#region Documentação
        /*  #swagger.tags = ['Clientes']
        #swagger.summary = 'Atualização parcial dos dados de Clientes.'
        */
        //#endregion
    )
}