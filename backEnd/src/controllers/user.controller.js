
import { userModel } from "../models/user.model.js"
import bcrypt from 'bcryptjs';


// POST -> crear usuario
export const postUser = async (request, response) => {
    try{

        const {nombreCompleto, correo, contrasena, telefono } = request.body;
        const codedPasswordUser = await bcrypt.hash(contrasena, 10);


        const newUser = await userModel.create({
            nombreCompleto,
            correo,
            contrasena: codedPasswordUser,
            telefono
        });
        return response.status(201).json({
            estado: "201",
            mensaje: "Usuario creado correctamente",
            datos: newUser
        })
    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al crear un usuario",
            datos: error.message || error
        })
    }
}


// GET -> mostrar usuarios
export const getUsers = async (request, response) => {
    try {
        const allUsers = await userModel.find() 
        if(allUsers.length === 0){
            return response.status(200).json({
                estado: "200",
                mensaje: "No se encontraron usuarios en la base de datos",
                datos: null
            })
        }

        return response.status(200).json({
            estado: "200",
            mensaje: "Estos son todos los usuarios encontrados",
            cantidadUsuarios: allUsers.length,
            usuarios: allUsers 

        })

    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al buscar los usuario",
            datos: error.message || error 
        })
    }
}



// DELETE -> eliminar usuario
export const deleteUserById = async (request, response) => {
    try {
        let idForDelete = request.params.id;
        const userDeleted = await userModel.findByIdAndDelete(idForDelete);

        return response.status(200).json({
            estado: "200",
            mensaje: "Se eliminó correctamente",
            datos: null
        })

    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al eliminar el usuario",
            datos: error.message || error 
        })
    }
}