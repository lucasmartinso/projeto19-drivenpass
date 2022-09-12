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
    const criptCvc: string = await utilsService.criptPassword(cardData.cvc)
    cardData = {...cardData, cvc: criptCvc, password: criptPassword };
    await cardsRepository.postCard(cardData); 
} 

export async function getCard(id: number, userId: number):  Promise<cards> {
    const userCard: cards | null = await verifyCard(id,userId);

    userCard.password = await utilsService.descriptPassword(userCard.password);
    userCard.cvc = await utilsService.descriptPassword(userCard.cvc);

    return userCard;
} 

export async function getAllCards(userId: number): Promise<cards[]> { 
    const userCards: cards[] = await cardsRepository.getAllUserCards(userId);

    for(let i=0; i<userCards.length; i++) { 
        userCards[i].password = await utilsService.descriptPassword(userCards[i].password);
        userCards[i].cvc = await utilsService.descriptPassword(userCards[i].cvc);
    }

    return userCards;
}   

export async function deleteCard(cardId: number, userId: number): Promise<void> {
    await verifyCard(cardId,userId);

    await cardsRepository.deleteCard(cardId);
}