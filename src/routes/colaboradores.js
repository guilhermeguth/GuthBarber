const colaboradoresController = require('../controllers/colaboradores');

module.exports = (app) => {
    app.post('/colaboradores', colaboradoresController.postColaboradores)
    app.get('/colaboradores', colaboradoresController.getColaboradores
        //#region Documentação
        /*  #swagger.tags = ['Colaboradores']
        #swagger.summary = 'Busca lista de Colaboradores.'
        */
        //#endregion
    )
    app.delete('/colaboradores/:id', colaboradoresController.deleteColaboradores
        //#region Documentação
        /*  #swagger.tags = ['Colaboradores']
        #swagger.summary = 'Deleta um colaborador selecionado.',
        #swagger.parameters['id'] = {
     description: "id do Colaborador",
     value: "1"
}
        */
        //#endregion
    )
    app.patch('/colaboradores/:id', colaboradoresController.patchColaboradores)
}