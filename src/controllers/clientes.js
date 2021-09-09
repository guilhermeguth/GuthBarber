let clientesService = require('../services/clientes')

const getClientes = async (req, res, next) =>{
    try {
        await clientesService.getClientes()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postClientes = async (req, res, next) => {
    try {
        await clientesService.postClientes(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}
const deleteClientes = async(req, res, next) => {
    try {
        await clienteService.deleteClientes(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}
const patchClientes = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await clienteService.patchClientes(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}

module.exports.patchClientes = patchClientes
module.exports.deleteClientes = deleteClientes
module.exports.getClientes = getClientes
module.exports.postClientes = postClientes