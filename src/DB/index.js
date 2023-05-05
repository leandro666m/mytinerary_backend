const mongoose = require('mongoose')

// const url="mongodb+srv://leandroandresrueda:Leandrito1@cluster0.xzytqty.mongodb.net/?retryWrites=true&w=majority"
  const url="mongodb+srv://user:f5QXmQOiUQ6onESW@cluster0.t7vm4en.mongodb.net/?retryWrites=true&w=majority"
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