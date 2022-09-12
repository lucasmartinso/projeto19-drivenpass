import { Router } from "express";
import { createCard, deleteCard, findCard, getAllUserCards } from "../controllers/cardsController";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import schemaValidation from "../middlewares/validationSchemas";
import { cardsSchema } from "../schemas/cardsSchema";

const cards = Router();

cards.post("/cards", schemaValidation(cardsSchema),validateTokenAuth,createCard); 
cards.get("/cards/:id", validateTokenAuth,findCard);
cards.get("/cards",validateTokenAuth,getAllUserCards);
cards.delete("/cards/:id",validateTokenAuth,deleteCard);

export default cards;