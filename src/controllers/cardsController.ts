import { Request, Response } from "express";
import { cards } from "@prisma/client";

export async function createCard(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    res.sendStatus(200);
}  

export async function findCard(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    res.sendStatus(200);
}  

export async function getAllUserCards(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    res.sendStatus(200);
}  

export async function deleteCard(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    res.sendStatus(200);
}  
