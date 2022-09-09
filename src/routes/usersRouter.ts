import { Router } from "express"; 
import { createUser, login, logout } from "../controllers/usersController";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import schemaValidation from "../middlewares/validationSchemas";
import { userSchema } from "../schemas/usersSchema"

const usersRouter = Router();

usersRouter.post("/users/sign-up", schemaValidation(userSchema),createUser); 
usersRouter.post("/users/sign-in", schemaValidation(userSchema),login); 
usersRouter.delete("/users/logout", validateTokenAuth,logout); 

export default usersRouter;