const db = require('../configs/pg')

const sql_delte = 
    `delete from fornecedores where id = $1`
const deleteFornecedores = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}
const sql_insert =
    `insert into fornecedores (nome, cpfcnpj, rginsc, telefone, email, endereco, numero, bairro, complemento, municipio, cep, uf)
                    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
const postFornecedores = async (params) => {
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
    from fornecedores`
const getFornecedores = async() => {
    let fornecedores = {}
    await db.query(sql_get)
        .then(ret => fornecedores = { total: ret.rows.length, fornecedores: ret.rows})
        .catch(err => fornecedores = err.stack)
    return fornecedores
}

const sql_patch =
    `update fornecedores
        set`
const patchFornecedores = async(params) => {
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
module.exports.patchFornecedores = patchFornecedores
module.exports.deleteFornecedores = deleteFornecedores
module.exports.postFornecedores = postFornecedores
module.exports.getFornecedores = getFornecedores   