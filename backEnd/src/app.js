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

dotenv.config(); // Load environment variables

const app = express();

// CORS Configuration (optional)
const corsOptions = {
    origin: 'http://localhost:4200', // Adjust to your front-end URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS options

// Middleware
app.use(express.json()); // For parsing application/json

// Route handlers
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/service", serviceRouter);
app.use("/login", loginRouter);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Connect to MongoDB
connectionMongo();

const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Server is listening on: http://localhost:${port}`);
});


