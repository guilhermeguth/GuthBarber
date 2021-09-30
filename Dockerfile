FROM node:14-alpine 
#De onde ira puxar

ENV TZ=America/Sao_Paulo
# Serve para você setar variáveis de ambiente

RUN mkdir -p /home/node/guthbarber-api
# Serve para executar comandos no processo da montagem da imageme que estamos construindo

WORKDIR /home/node/guthbarber-api
#define uma pasta dentro do container onde os comandos serão executados

COPY ./package.json ./
COPY ./src ./src

RUN npm install

EXPOSE 3000
# Informal qual porta deverá ser liberada

CMD ["node","./src/index.js"]
# Executa apenas na criação do container e não no build da imagem, deve ser unico no docker file