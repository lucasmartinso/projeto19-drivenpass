import { Router } from "express"; 
import { createUser } from "../controllers/usersController";
import schemaValidation from "../middlewares/validationSchemas";
import { userSchema } from "../schemas/usersSchema"

const usersRouter = Router();

usersRouter.post("/users/sign-up", schemaValidation(userSchema),createUser); 

export default usersRouter;