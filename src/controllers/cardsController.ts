import { Request, Response } from "express";
import { cards } from "@prisma/client";
import * as utilsService from "../utils/findUserService";
import * as cardsService from "../services/cardsService";

export async function createCard(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const { title,number,name,cvc,expirateDate,password,isVirtual,type }: Omit<cards, 'id' | 'createdAt'> = req.body;

    await utilsService.findUser(userId);

    const cardData: Omit<cards, 'id' | 'createdAt'> = {
        userId, 
        title,
        number,
        name,
        cvc,
        expirateDate,
        password,
        isVirtual,
        type
    }

    await cardsService.verifyUserRepeteadCard(cardData);
    await cardsService.createCard(cardData);

    res.sendStatus(201);
}  

export async function findCard(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    const userCard: cards = await cardsService.getCard(cardId,userId);

    res.status(200).send(userCard);
}  

export async function getAllUserCards(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;

    const userCards = await cardsService.getAllCards(userId); 
    
    res.status(200).json({
        cards: userCards
    });
}  

export async function deleteCard(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    await cardsService.deleteCard(cardId,userId);

    res.sendStatus(204);
}  
