
import {adminModel} from "../models/admin.model.js";
import bcrypt from 'bcryptjs';


// POST -> crear Admin
export const postAdmin = async (request, response) => {
    try {

        const { correo, contrasena} = request.body;

        // Encriptar contraseña
        const codedPassword = await bcrypt.hash(contrasena, 10);


        const newAdmin = await adminModel.create({
            correo,
            contrasena: codedPassword
        }) 

        return response.status(201).json({
            estado: "201",
            mensaje: "Administrador creado correctamente",
            datos: newAdmin
        })

    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al crear un adminitrador",
            datos: error.message || error 
        })
    }
}