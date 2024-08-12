
// Importaciones
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombreCompleto:{
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true,
        unique: true
    },

    contrasena:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    }
})

export const userModel = mongoose.model("usuario", userSchema);
