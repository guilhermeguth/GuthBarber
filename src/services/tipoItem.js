const db = require('../configs/pg')

const sql_delete = 
    `delete from tipo_item where id = $1`
const deleteTipoItem = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}
const sql_insert =
    `insert into tipo_item (descricao)
                    values ($1)`
const postTipoItem = async (params) => {
    const {descricao} = params
    await db.query(sql_insert, [descricao])
}
const sql_get = 
    `select id,
            descricao
    from tipo_item`
const getTipoItem = async() => {
    let tipoItem = {}
    await db.query(sql_get)
        .then(ret => tipoItem = { total: ret.rows.length, tipoItem: ret.rows})
        .catch(err => tipoItem = err.stack)
    return tipoItem
}

const sql_patch =
    `update tipo_item
        set`
const patchTipoItem = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if(params.nome){
        countParams ++
        fields += ` nome $${countParams}`
        binds.push(params.nome)
    }
}
module.exports.patchTipoItem = patchTipoItem
module.exports.deleteTipoItem = deleteTipoItem
module.exports.postTipoItem = postTipoItem
module.exports.getTipoItem = getTipoItem   