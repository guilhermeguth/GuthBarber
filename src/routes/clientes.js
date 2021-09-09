const clientesController = require('../controllers/clientes');

module.exports = (app) => {
    app.post('/clientes', clientesController.postClientes)
    app.get('/clientes', clientesController.getClientes)
    app.delete('/clientes/:id', clientesController.deleteClientes)
    app.patch('/clientes/:id', clientesController.patchClientes)
}