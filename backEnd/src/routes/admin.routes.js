
import { Router } from "express";
import { postAdmin } from "../controllers/admin.controller.js"

const adminRouter = Router();

adminRouter.post("/", postAdmin);

export default adminRouter;