const db = require('../configs/pg')

const sql_delete = 
    `delete from colaboradores where id = $1`
const deleteColaboradores = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}
const sql_insert =
    `insert into colaboradores (nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf)
                    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
const postColaboradores = async (params) => {
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
    from colaboradores`
const getColaboradores = async() => {
    let colaboradores = {}
    await db.query(sql_get)
        .then(ret => colaboradores = { total: ret.rows.length, colaboradores: ret.rows})
        .catch(err => colaboradores = err.stack)
    return colaboradores
}

const sql_patch =
    `update colaboradores
        set`
const patchColaboradores = async(params) => {
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
module.exports.patchColaboradores = patchColaboradores
module.exports.deleteColaboradores = deleteColaboradores
module.exports.postColaboradores = postColaboradores
module.exports.getColaboradores = getColaboradores 