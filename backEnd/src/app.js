
// CONFIGURACIÓN DEL SERVIDOR
// Importaciones dependencias y módulos
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionMongo } from "./config/dataBase.js";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import serviceRouter from "./routes/service.routes.js";
import loginRouter from "./routes/login.routes.js";




const app = express();
dotenv.config();
app.use(cors());


const port = process.env.PORT || 3000;


connectionMongo();
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/service", serviceRouter);
app.use("/login", loginRouter);




app.listen(port, () => {
    console.log(`El puerto se está escuchando en: http://localhost:${port}`);
})

