import { cards } from "@prisma/client";
import * as cardsRepository from "../repositories/cardsRepository";

async function verifyCard(id: number, userId: number): Promise<cards> { 
    const userCard: cards | null = await cardsRepository.findCard(id);

    if(!userCard) throw { code: "Not Found", message:  "This safe note don't exist yet"}

    if(userCard.userId !== userId) throw { code: "Not Found", message:  "This safe note don't belongs to you"} 

    return userCard;
}

export async function createCard(cardData: Omit<cards, 'id' | 'createdAt'>) {
    await cardsRepository.postCard(cardData); 
}