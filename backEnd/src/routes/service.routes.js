
import {Router} from "express"
import { postService, getServices, putServiceById, deleteServiceById } from "../controllers/service.controller.js";

const serviceRouter = Router();

serviceRouter.get("/", getServices); 
serviceRouter.post("/", postService);
serviceRouter.put("/:id", putServiceById);
serviceRouter.delete("/:id", deleteServiceById);

export default serviceRouter; 