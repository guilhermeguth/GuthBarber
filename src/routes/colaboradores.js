const colaboradoresController = require('../controllers/colaboradores');

module.exports = (app) => {
    app.post('/colaboradores', colaboradoresController.postColaboradores)
    app.get('/colaboradores', colaboradoresController.getColaboradores)
    app.delete('/colaboradores/:id', colaboradoresController.deleteColaboradores)
    app.patch('/colaboradores/:id', colaboradoresController.patchColaboradores)
}