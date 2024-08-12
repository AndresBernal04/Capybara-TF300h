
// Importaciones
import mongoose from 'mongoose';

// Función flecha (para generar la conexión con la base de datos)
// const variable = async () => {}


// Función declarativa (para generar la conexión con la base de datos) 
export async function connectionMongo(){
    try {
        // await mongoose.connect(process.env.URL_DATABSAE, {});
        await mongoose.connect(process.env.URL_DATABASE);
        console.log("Conexión exitosa con la base de datos");
    } catch (error) {
        console.log("Error de conexión: ", error);
    }
  
}