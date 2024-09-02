
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
            });
        }



        // Se extrae el token que se necesita, quitando la palabra Bearer
        token = token.split(" ")[1];
        if (!token) {
            return res.status(400).json({
                mensaje: 'Token no autorizado'
            });
        }

        // Verificación del token
        try {

            // Se decodifica el token
            const decoded = await verifyToken(token);

            // Validación de rol
            if (requiredRole == 'admin' && !decoded.isAdmin) {
                return res.status(403).json({
                    mensaje: 'Acceso denegado, no tiene permisos de administrador',
                });
            }
            req.user = decoded;


            // next -> indica que debe seguir con el siguiente intermediario o controlador
            next();

        } catch (error) {
            return res.status(401).json({
                mensaje: 'Falló la autenticación con el token, token invalido',
                error: error.message
            });
        }
    }
}
export default auth;