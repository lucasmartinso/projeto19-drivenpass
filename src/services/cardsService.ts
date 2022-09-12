import { cards } from "@prisma/client";
import * as cardsRepository from "../repositories/cardsRepository";
import * as utilsService from "../utils/encriptDescriptPasswords";

async function verifyCard(id: number, userId: number): Promise<cards> { 
    const userCard: cards | null = await cardsRepository.findCard(id);

    if(!userCard) throw { code: "Not Found", message:  "This card don't exist yet"}

    if(userCard.userId !== userId) throw { code: "Not Found", message:  "This card don't belongs to you"} 

    return userCard;
} 

export async function verifyUserRepeteadCard({userId,title}: Omit<cards, 'id' | 'createdAt'>) {
    const repeteadTitle = await cardsRepository.findUserTitle(userId,title);
    if(repeteadTitle) throw { code: "Bad Request", message: "This title already has been declareted by this user"};
}

export async function createCard(cardData: Omit<cards, 'id' | 'createdAt'>) {
    const criptPassword: string = await utilsService.criptPassword(cardData.password);
    cardData = {...cardData, cvc: Number(cardData.cvc), password: criptPassword };
    await cardsRepository.postCard(cardData); 
}