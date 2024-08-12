
// Importaciones
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
        unique: true
    },

    imagen:{
        type: String,
        required: true
    },

    descripcion:{
        type: String,
        required: true
    },

    precio:{
        type: Number,
        required: true
    }
})

export const serviceModel = mongoose.model("servicio", serviceSchema);