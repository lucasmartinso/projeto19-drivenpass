import { cards } from "@prisma/client";
import prisma from "../databases/prisma";

export async function postCard({ userId, title, number, name, cvc, expirateDate, password, isVirtual, type }: Omit<cards, 'id' | 'createdAt'>): Promise<void> { 
    await prisma.cards.create({ data: { userId, title, number, name, cvc, expirateDate, password, isVirtual, type }});
} 

export async function findUserTitle(userId: number, title: string): Promise<cards | null> {
    const result: cards | null = await prisma.cards.findFirst({ where: { userId, title }});
    
    return result;
}

export async function findCard(cardId: number): Promise<cards | null> { 
    const result: cards | null = await prisma.cards.findUnique({ where : { id: cardId }});

    return result;
} 

export async function getAllUserCards(userId: number): Promise<cards[]> { 
    const result: cards[] = await prisma.cards.findMany({ where: { userId }}); 

    return result;
} 

export async function deleteCard(cardId: number): Promise<void> { 
    await prisma.cards.delete({ where: { id: cardId }});
}