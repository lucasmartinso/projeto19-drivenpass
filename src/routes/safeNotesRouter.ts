import { Router } from "express";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import schemaValidation from "../middlewares/validationSchemas";
import { safeNotesSchema } from "../schemas/safeNotesSchema";
import { createNote, deleteNotes, findNote, getAllNotes } from "../controllers/safeNotesController";

const safeNotesRouter = Router();

safeNotesRouter.post("/notes", schemaValidation(safeNotesSchema),validateTokenAuth,createNote); 
safeNotesRouter.get("/notes/:id", validateTokenAuth,findNote);
safeNotesRouter.get("/notes",validateTokenAuth,getAllNotes);
safeNotesRouter.delete("/notes/:id",validateTokenAuth,deleteNotes);

export default safeNotesRouter;