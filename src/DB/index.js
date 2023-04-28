const mongoose = require('mongoose')

const url="mongodb://localhost:27017/MyTineraryDB"

async function conectarDB() {
          /* conexion a la Base de Datos */
    mongoose.connect(url).then( ()=>{
                            console.log('Conectado a Mongo DB');
                        })
                        .catch( (error)=>{
                            console.error( `Error al conectar a Mongo DB: ${error}`); 
                        })

}

module.exports = conectarDB