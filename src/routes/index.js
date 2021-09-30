const Clientes = require('./clientes')
const Colaboradores = require('./colaboradores')
const Fornecedores = require('./fornecedores')
const Itens = require('./itens')
const tipoItem = require('./tipoItem')

module.exports = (app) => {
    Clientes(app)
    Colaboradores(app)
    Fornecedores(app)
    Itens(app)
    tipoItem(app)
}