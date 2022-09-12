import { credentials } from "@prisma/client";
import prisma from "../databases/prisma";

export async function postCredentials({userId,title,url,username,password}: Omit<credentials, 'id' | 'createdAt'>): Promise<void> {
    await prisma.credentials.create({ data: { userId, title, url, username, password }});
} 

export async function findUserTitle(userId: number, title: string): Promise<credentials | null> {
    const result: credentials | null = await prisma.credentials.findFirst({ where: { userId, title }});
    
    return result;
}

export async function findUserCredentials(userId: number): Promise<credentials[]> { 
    const result: credentials[] = await prisma.credentials.findMany({ where: { userId }}); 

    return result;
} 

export async function findCredential(credentialId: number): Promise<credentials | null> { 
    const result: credentials | null = await prisma.credentials.findUnique({ where: { id: credentialId }});

    return result;
} 

export async function deletCredential(credentialId:  number): Promise<void> { 
    await prisma.credentials.delete({ where: {id: credentialId}});
}