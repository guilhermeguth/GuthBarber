const Clientes = require('./clientes')
const Colaboradores = require('./colaboradores')
const Fornecedores = require('./fornecedores')

module.exports = (app) => {
    Clientes(app)
    Colaboradores(app)
    Fornecedores(app)
}