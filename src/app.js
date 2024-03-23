import {envs} from './config/env.js'
// const {envs} = require('./config/env.js')
import {startServer} from './server/server.js'
// const {startServer} = require('./server/server.js')

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
}
//Funcion agnóstica autoconvocada
//Agnóstica: No tiene nombre
//Autoconvocada: Porque se ejecuta así misma con los parentesis finales
(async () => {
  main()
})()
