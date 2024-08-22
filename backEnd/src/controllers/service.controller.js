
import { serviceModel } from "../models/service.model.js";

// POST -> crear servicio
export const postService = async (request, response) => {
    try{
        const newUser = await serviceModel.create(request.body)
        return response.status(201).json({
            estado: "201",
            mensaje: "Servicio creado correctamente",
            datos: newUser
        })
    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al crear un servicio",
            datos: error.message || error
        })
    }
}


// GET -> mostrar servicios
export const getServices = async (request, response) => {
    try {
        const allServices = await serviceModel.find() 
        if(allServices.length === 0){
            return response.status(200).json({
                estado: "200",
                mensaje: "No se encontraron servicios en la base de datos",
                datos: null
            })
        }

        return response.status(200).json({
            estado: "200",
            mensaje: "Estos son todos los servicios encontrados",
            cantidadServicios: allServices.length,
            usuarios: allServices 

        })

    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al buscar los servicios",
            datos: error.message || error 
        })
    }
}


// PUT -> actualizar servicio
export const putServiceById = async (request, response) => {
    try {
        let idForPut = request.params.id
        const dataForUpdate = request.body
        const serviceUpdated = await serviceModel.findByIdAndUpdate(idForPut, dataForUpdate);

        return response.status(200).json({
            estado: '200',
            mensaje:'Se actualizó correctamente el servicio',
            datos: serviceUpdated
        })
        
    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al actualizar el servicio',
            datos: error.message || error,
        })
    }
}


// DELETE -> eliminar servicio
export const deleteServiceById = async (request, response) => {
    try {
        let idForDelete = request.params.id;
        const serviceDeleted = await serviceModel.findByIdAndDelete(idForDelete);

        return response.status(200).json({
            estado: "200",
            mensaje: "Se eliminó correctamente el servicio",
            datos: null
        })

    } catch (error) {
        return response.status(400).json({
            estado: "400",
            mensaje: "Ocurrió un problema al eliminar el servicio",
            datos: error.message || error
        })
    }
}