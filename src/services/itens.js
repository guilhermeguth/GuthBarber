const db = require('../configs/pg')

const sql_delte = 
    `delete from itens where id = $1`
const deleteItens = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}
const sql_insert =
    `insert into clientes (nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf)
                    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
const postItens = async (params) => {
    const {nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf } = params
    await db.query(sql_insert, [nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf])
}
const sql_get = 
    `select id,
            nome,
            cpfcnpj,
            rginsc,
            telefone,
            email,
            endereco,
            numero,
            bairro,
            complemento,
            municipio,
            cep,
            uf
    from clientes`
const getItens = async() => {
    let clientes = {}
    await db.query(sql_get)
        .then(ret => clientes = { total: ret.rows.length, clientes: ret.rows})
        .catch(err => clientes = err.stack)
    return clientes
}

const sql_patch =
    `update clientes
        set`
const patchItens = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if(params.nome){
        countParams ++
        fields += ` nome $${countParams}`
        binds.push(params.nome)
    }
    if(params.cpfcnpj){
        countParams ++
        fields += (fields? ',':'') + ` cpfcnpj = $${countParams}`
        binds.push(params.cpfcnpj)
    }
}
module.exports.patchItens = patchItens
module.exports.deleteItens = deleteItens
module.exports.postItens = postItens
module.exports.getItens = getItens    