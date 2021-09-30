const itensController = require('../controllers/itens');

module.exports = (app) => {
    app.post('/itens', itensController.postItens)
    app.get('/itens', itensController.getItens
        //#region Documentação
        /*  #swagger.tags = ['Itens']
        #swagger.summary = 'Busca lista de Itens.'
        */
        //#endregion
    )
    app.delete('/itens/:id', itensController.deleteItens
        //#region Documentação
        /*  #swagger.tags = ['Itens']
        #swagger.summary = 'Deleta um item selecionado.',
        #swagger.parameters['id'] = {
        description: "id do item",
        value: "1"
        }
        */
        //#endregion
    )
    app.patch('/itens/:id', itensController.patchItens)
}