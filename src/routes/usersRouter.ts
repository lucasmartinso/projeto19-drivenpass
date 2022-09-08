import { Router } from "express"; 
import { createUser, login } from "../controllers/usersController";
import schemaValidation from "../middlewares/validationSchemas";
import { userSchema } from "../schemas/usersSchema"

const usersRouter = Router();

usersRouter.post("/users/sign-up", schemaValidation(userSchema),createUser); 
usersRouter.post("/users/sign-in", schemaValidation(userSchema),login); 

export default usersRouter;