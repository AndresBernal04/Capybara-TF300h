
// Importaciones
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    correo:{
        type: String,
        required: true,
        unique: true
    },

    contrasena:{
        type: String,
        required: true
    },

})

export const adminModel = mongoose.model("administrador", adminSchema);
