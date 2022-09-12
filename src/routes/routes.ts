import { Router } from "express"; 
import credentialsRouter from "./credentialsRouter";
import usersRouter from "./usersRouter"
import safeNotesRouter from "./safeNotesRouter"

const router = Router();

router.use(usersRouter, credentialsRouter, safeNotesRouter); 

export default router;