const fornecedoresController = require('../controllers/fornecedores');

module.exports = (app) => {
    app.post('/fornecedores', fornecedoresController.postFornecedores)
    app.get('/fornecedores', fornecedoresController.getFornecedores)
    app.delete('/fornecedores/:id', fornecedoresController.deleteFornecedores)
    app.patch('/fornecedores/:id', fornecedoresController.patchFornecedores)
}