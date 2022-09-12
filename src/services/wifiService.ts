import { wifi } from "@prisma/client";
import * as wifiRepository from "../repositories/wifiRepository";
import * as utilsService from "../utils/encriptDescriptPasswords";

async function verifyWifi(id: number, userId: number): Promise<wifi> { 
    const userWify: wifi | null = await wifiRepository.findWifi(id);

    if(!userWify) throw { code: "Not Found", message:  "This card don't exist yet"}

    if(userWify.userId !== userId) throw { code: "Not Found", message:  "This card don't belongs to you"} 

    return userWify;
} 

export async function createWifi(cardData: Omit<wifi, 'id' | 'createdAt'>) {
    const criptPassword: string = await utilsService.criptPassword(cardData.password);

    cardData = {...cardData, password: criptPassword };
    await wifiRepository.postWifi(cardData); 
} 

export async function getWifi(id: number, userId: number):  Promise<wifi> {
    const userCard: wifi | null = await verifyWifi(id,userId);

    userCard.password = await utilsService.descriptPassword(userCard.password);

    return userCard;
} 

export async function getAllWifi(userId: number): Promise<wifi[]> { 
    const userwifi: wifi[] = await wifiRepository.getAllUserWifi(userId);

    for(let i=0; i<userwifi.length; i++) { 
        userwifi[i].password = await utilsService.descriptPassword(userwifi[i].password);
    }

    return userwifi;
}   

export async function deleteWifi(cardId: number, userId: number): Promise<void> {
    await verifyWifi(cardId,userId);

    await wifiRepository.deleteWifi(cardId);
}