let itensService = require('../services/itens')

const getItens = async (req, res, next) =>{
    try {
        await itensService.getItens()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postItens = async (req, res, next) => {
    try {
        await itensService.postItens(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}
const deleteItens = async(req, res, next) => {
    try {
        await itensService.deleteItens(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}
const patchItens = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await itensService.patchItens(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}

module.exports.patchItens = patchItens
module.exports.deleteItens = deleteItens
module.exports.getItens = getItens
module.exports.postItens = postItens