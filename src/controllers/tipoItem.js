let tipoItemService = require('../services/tipoItem.js')

const getTipoItem = async (req, res, next) =>{
    try {
        await tipoItemService.getTipoItem()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postTipoItem = async (req, res, next) => {
    try {
        await tipoItemService.postTipoItem(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}
const deleteTipoItem = async(req, res, next) => {
    try {
        await tipoItemService.deleteTipoItem(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}
const patchTipoItem = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await tipoItemService.patchTipoItem(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}
module.exports.patchTipoItem = patchTipoItem
module.exports.deleteTipoItem = deleteTipoItem
module.exports.getTipoItem = getTipoItem
module.exports.postTipoItem = postTipoItem