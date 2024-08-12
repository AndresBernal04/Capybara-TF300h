
// Los middlewares son los intermediarios entre la petición del cliente y los controladores que obtienen la respuesta del servidor

import { verifyToken } from "../lib/jwt.js";

// next -> se usa sólo en intermediarios (middlewares)
// Middleware debe tener request, response y método el next
// const auth = (req, res, next) => {

// }


// Esta es la opción para manejar diferentes roles
const auth = (requiredRole) => {

    return async (req, res, next) => {
        
        // Validación de que se pasó un token
        let token = req.headers["authorization"];

        if (!token) {
            return res.status(401).json({
                mensaje: "No se encontró un token"
            })
        }

        // next -> indica que debe seguir con el siguiente intermediario o controlador
        next();
    }
}



export default auth;