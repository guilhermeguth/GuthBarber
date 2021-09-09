const itensController = require('../controllers/itens');

module.exports = (app) => {
    app.post('/itens', itensController.postItens)
    app.get('/itens', itensController.getItens)
    app.delete('/itens/:id', itensController.deleteItens)
    app.patch('/itens/:id', itensController.patchItens)
}