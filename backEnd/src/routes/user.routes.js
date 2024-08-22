
import {Router} from "express"
import { getUsers, postUser, deleteUserById } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

const userRouter = Router();

userRouter.get("/", auth(), getUsers); 
userRouter.post("/", postUser); 
userRouter.delete("/:id", auth('admin'), deleteUserById); 

export default userRouter; 