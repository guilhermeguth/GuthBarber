const fornecedoresController = require('../controllers/fornecedores');

module.exports = (app) => {
    app.post('/fornecedores', fornecedoresController.postFornecedores)
    app.get('/fornecedores', fornecedoresController.getFornecedores
        //#region Documentação
        /*  #swagger.tags = ['Fornecedores']
        #swagger.summary = 'Busca lista de Fornecedores.'
        */
        //#endregion
    )
    app.delete('/fornecedores/:id', fornecedoresController.deleteFornecedores
        //#region Documentação
        /*  #swagger.tags = ['Fornecedores']
        #swagger.summary = 'Deleta um Fornecedor selecionado.',
        #swagger.parameters['id'] = {
     description: "id do Fornecedore",
     value: "1"
}
        */
        //#endregion
    )
    app.patch('/fornecedores/:id', fornecedoresController.patchFornecedores)
}