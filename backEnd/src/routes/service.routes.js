
import {Router} from "express"
import { postService, getServices, putServiceById, deleteServiceById } from "../controllers/service.controller.js";
import auth from "../middlewares/auth.js";

const serviceRouter = Router();

serviceRouter.get("/", getServices); 
serviceRouter.post("/", auth(), postService);
serviceRouter.put("/:id", auth(), putServiceById);
serviceRouter.delete("/:id", auth(), deleteServiceById);

export default serviceRouter; 