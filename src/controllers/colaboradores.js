let colaboradoresService = require('../services/colaboradores')

const getColaboradores = async (req, res, next) =>{
    try {
        await colaboradoresService.getColaboradores()
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postColaboradores = async (req, res, next) => {
    try {
        await colaboradoresService.postColaboradores(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}
const deleteColaboradores = async(req, res, next) => {
    try {
        await colaboradoresService.deleteColaboradores(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}
const patchColaboradores = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await colaboradoresService.patchColaboradores(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err);
    }
}

module.exports.patchColaboradores = patchColaboradores
module.exports.deleteColaboradores = deleteColaboradores
module.exports.getColaboradores = getColaboradores
module.exports.postColaboradores = postColaboradores