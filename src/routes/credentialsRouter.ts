import { Router } from "express";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import schemaValidation from "../middlewares/validationSchemas";
import { credentialsSchema } from "../schemas/credentialsSchema";
import { createCredentials } from "../controllers/credentialsController";

const credentialsRouter = Router();

credentialsRouter.post("/credentials/:id", schemaValidation(credentialsSchema),validateTokenAuth,createCredentials); 

export default credentialsRouter;