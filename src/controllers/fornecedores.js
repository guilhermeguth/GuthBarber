let fornecedoresService = require('../services/fornecedores')

const getFornecedores = async (req, res, next) =>{
    try {
        await clientesService.getFornecedores()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postFornecedores = async (req, res, next) => {
    try {
        await clientesService.postFornecedores(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}
const deleteFornecedores = async(req, res, next) => {
    try {
        await clienteService.deleteFornecedores(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}
const patchFornecedores = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await clienteService.patchFornecedores(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}

module.exports.patchFornecedores = patchFornecedores
module.exports.deleteFornecedores = deleteFornecedores
module.exports.getFornecedores = getFornecedores
module.exports.postFornecedores = postFornecedores