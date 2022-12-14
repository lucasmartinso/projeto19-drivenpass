import { Router } from "express"; 
import credentialsRouter from "./credentialsRouter";
import usersRouter from "./usersRouter";
import safeNotesRouter from "./safeNotesRouter";
import cardsRouter from "./cardsRouter";
import wifiRouter from "./wifiRouter"

const router = Router();

router.use(usersRouter, credentialsRouter, safeNotesRouter, cardsRouter, wifiRouter); 

export default router;