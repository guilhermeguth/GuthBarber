const tipoItemController = require('../controllers/tipoItem');

module.exports = (app) => {
    app.post('/tipoItem', tipoItemController.postTipoItem)
    app.get('/tipoItem', tipoItemController.getTipoItem
        //#region Documentação
        /*  #swagger.tags = ['Tipo Item']
        #swagger.summary = 'Busca lista de Tipo de Item.'
        */
        //#endregion
    )
    app.delete('/tipoItem/:id', tipoItemController.deleteTipoItem
        //#region Documentação
        /*  #swagger.tags = ['Tipo Item']
        #swagger.summary = 'Deleta um tipo item selecionado.',
        #swagger.parameters['id'] = {
        description: "id do tipo item",
        value: "1"
        }
        */
        //#endregion 
    )
    app.patch('/tipoItem/:id', tipoItemController.patchTipoItem)
}