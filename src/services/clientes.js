const db = require('../configs/pg')

const sql_delte = 
    `delete from clientes where id = $1`
const deleteClientes = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}
const sql_insert =
    `insert into clientes (nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf)
                    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
const postClientes = async (params) => {
    console.log("carcule")
    const {nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf } = params
    await db.query(sql_insert, [nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf])
    console.log("carcule2")
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
const getClientes = async() => {
    let clientes = {}
    await db.query(sql_get)
        .then(ret => clientes = { total: ret.rows.length, clientes: ret.rows})
        .catch(err => clientes = err.stack)
    return clientes
}

const sql_patch =
    `update clientes
        set`
const patchClientes = async(params) => {
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
    if(params.rginsc){
        countParams ++
        fields += (fields? ',':'') + ` rginsc = $${countParams}`
        binds.push(params.rginsc)
    }
    if(params.telefone){
        countParams ++
        fields += (fields? ',':'') + ` telefone = $${countParams}`
        binds.push(params.telefone)
    }
    if(params.email){
        countParams ++
        fields += (fields? ',':'') + ` email = $${countParams}`
        binds.push(params.email)
    }
    if(params.endereco){
        countParams ++
        fields += (fields? ',':'') + ` endereco = $${countParams}`
        binds.push(params.endereco)
    }
    if(params.numero){
        countParams ++
        fields += (fields? ',':'') + ` numero = $${countParams}`
        binds.push(params.numero)
    }
    if(params.bairro){
        countParams ++
        fields += (fields? ',':'') + ` bairro = $${countParams}`
        binds.push(params.bairro)
    }
    if(params.complemento){
        countParams ++
        fields += (fields? ',':'') + ` complemento = $${countParams}`
        binds.push(params.complemento)
    }
    if(params.municipio){
        countParams ++
        fields += (fields? ',':'') + ` municipio = $${countParams}`
        binds.push(params.municipio)
    }
    if(params.cep){
        countParams ++
        fields += (fields? ',':'') + ` cep = $${countParams}`
        binds.push(params.cep)
    }
    if(params.uf){
        countParams ++
        fields += (fields? ',':'') + ` uf = $${countParams}`
        binds.push(params.uf)
    }    
}
module.exports.patchClientes = patchClientes
module.exports.deleteClientes = deleteClientes
module.exports.postClientes = postClientes
module.exports.getClientes = getClientes    