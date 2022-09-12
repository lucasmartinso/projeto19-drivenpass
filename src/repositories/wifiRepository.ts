import { wifi } from "@prisma/client";
import prisma from "../databases/prisma";

export async function postWifi({ userId, title, name, password }: Omit<wifi, 'id' | 'createdAt'>): Promise<void> { 
    await prisma.wifi.create({ data: { userId, title, name, password }});
} 

export async function findUserTitle(userId: number, title: string): Promise<wifi | null> {
    const result: wifi | null = await prisma.wifi.findFirst({ where: { userId, title }});
    
    return result;
}

export async function findWifi(wifiId: number): Promise<wifi | null> { 
    const result: wifi | null = await prisma.wifi.findUnique({ where : { id: wifiId }});

    return result;
} 

export async function getAllUserWifi(userId: number): Promise<wifi[]> { 
    const result: wifi[] = await prisma.wifi.findMany({ where: { userId }}); 

    return result;
} 

export async function deleteWifi(wifiId: number): Promise<void> { 
    await prisma.wifi.delete({ where: { id: wifiId }});
}