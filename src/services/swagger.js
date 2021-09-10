const swaggerAutogen = require('swagger-autogen')('pt-BR');

const doc = {
    info: {
        version: "1.0.0",
        title: "API GuthBarber",
        description: "Documentação da API da GuthBarber"
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = [
    './src/routes/clientes.js',
    './src/routes/colaboradores.js',
    './src/routes/fornecedores.js',
    './src/routes/itens.js',
    './src/routes/tipoItem.js'
]
swaggerAutogen(outputFile, endpointsFiles, doc);