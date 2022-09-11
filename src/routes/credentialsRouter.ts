import { Router } from "express";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import schemaValidation from "../middlewares/validationSchemas";
import { credentialsSchema } from "../schemas/credentialsSchema";
import { createCredentials, deleteCredentials, findCredential, getAllCredentials } from "../controllers/credentialsController";

const credentialsRouter = Router();

credentialsRouter.post("/credentials/:id", schemaValidation(credentialsSchema),validateTokenAuth,createCredentials); 
credentialsRouter.get("/credentials/:id", validateTokenAuth,findCredential);
credentialsRouter.get("/credentials",validateTokenAuth,getAllCredentials);
credentialsRouter.delete("/credentials/:id",validateTokenAuth,deleteCredentials);

export default credentialsRouter;