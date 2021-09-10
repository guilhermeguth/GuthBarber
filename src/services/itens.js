const db = require('../configs/pg')
const itens = require('../routes/itens')

const sql_delete = 
    `delete from itens where id = $1`
const deleteItens = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}
const sql_insert =
    `insert into itens (codigo, tipo_item, descricao, medida, fornecedor, qtd, valor)
                    values ($1, $2, $3, $4, $5, $6, $7)`
const postItens = async (params) => {
    const { codigo, tipoItem, descricao, medida, fornecedor, qtd, valor } = params
    await db.query(sql_insert, [codigo, tipoItem, descricao, medida, fornecedor, qtd, valor])
}
const sql_get = 
    `select id,
            codigo,
            tipo_item,
            descricao,
            medida,
            fornecedor,
            qtd,
            valor
    from itens`
const getItens = async() => {
    let itens = {}
    await db.query(sql_get)
        .then(ret => itens = { total: ret.rows.length, itens: ret.rows})
        .catch(err => itens = err.stack)
    return itens
}

const sql_patch =
    `update itens
        set`
const patchItens = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if(params.codigo){
        countParams ++
        fields += ` codigo $${countParams}`
        binds.push(params.codigo)
    }
    if(params.tipoItem){
        countParams ++
        fields += (fields? ',':'') + ` tipo_item = $${countParams}`
        binds.push(params.tipoItem)
    }
    if(params.descricao){
        countParams ++
        fields += (fields? ',':'') + ` descricao = $${countParams}`
        binds.push(params.descricao)
    }
    if(params.medida){
        countParams ++
        fields += (fields? ',':'') + ` medida = $${countParams}`
        binds.push(params.medida)
    }
    if(params.fornecedor){
        countParams ++
        fields += (fields? ',':'') + ` fornecedor = $${countParams}`
        binds.push(params.fornecedor)
    }
    if(params.qtd){
        countParams ++
        fields += (fields? ',':'') + ` qtd = $${countParams}`
        binds.push(params.qtd)
    }
    if(params.valor){
        countParams ++
        fields += (fields? ',':'') + ` valor = $${countParams}`
        binds.push(params.valor)
    }
}
module.exports.patchItens = patchItens
module.exports.deleteItens = deleteItens
module.exports.postItens = postItens
module.exports.getItens = getItens    