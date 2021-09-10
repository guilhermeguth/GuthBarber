const tipoItemController = require('../controllers/itens');

module.exports = (app) => {
    app.post('/tipoItem', tipoItemController.postTipoItem)
    app.get('/tipoItem', tipoItemController.getTipoItem)
    app.delete('/tipoItem/:id', tipoItemController.deleteTipoItem)
    app.patch('/tipoItem/:id', tipoItemController.patchTipoItem)
}