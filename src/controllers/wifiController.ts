import { Request, Response } from "express";
import { cards, wifi } from "@prisma/client";
import * as utilsService from "../utils/findUserService";
import * as cardsService from "../services/cardsService"; 
import * as wifiService from "../services/wifiService";

export async function createWifi(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const { title,name,password }: Omit<wifi, 'id' | 'createdAt'> = req.body;

    await utilsService.findUser(userId);

    const wifiData: Omit<wifi, 'id' | 'createdAt'> = {
        userId, 
        title,
        name,
        password
    }

    await wifiService.createWifi(wifiData);

    res.sendStatus(201);
}  

export async function findWifi(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    const userCard: cards = await cardsService.getCard(cardId,userId);

    res.status(200).send(userCard);
}  

export async function getAllUserWifi(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;

    const userCards = await cardsService.getAllCards(userId); 
    
    res.status(200).json({
        cards: userCards
    });
}  

export async function deleteWifi(req: Request, res: Response): Promise<void> {
    const { userId }: cards  = res.locals.user;
    const cardId: number = Number(req.params.id);

    await cardsService.deleteCard(cardId,userId);

    res.sendStatus(204);
}  
