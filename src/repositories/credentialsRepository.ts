import { credentials } from "@prisma/client";
import prisma from "../databases/prisma";

export async function postCredentials({userId,title,url,username,password}: Omit<credentials, 'id' | 'createdAt'>): Promise<void> {
    await prisma.credentials.create({ data: { userId, title, url, username, password }});
} 

export async function findUserTitle(userId: number, title: string) {
    const result: credentials | null = await prisma.credentials.findFirst({ where: { userId, title }});
    
    return result;
}