import prisma from "../databases/prisma";
import { tokens, Users } from "@prisma/client";

export async function findEmail(email: string): Promise<Users | null> { 
    const result = await prisma.users.findFirst({ where: { email } });

    return result;
} 

export async function postUser(email: string, password: string): Promise<void> { 
    await prisma.users.create({ data: { email, password }});
} 

export async function postToken(userId: number, token: string): Promise<void> { 
    await prisma.tokens.create({ data: { userId, token }});
}

export async function findToken(token: string) { 
    const result: tokens | null = await prisma.tokens.findUnique({ where: { token }});

   return result;
}

export async function deleteToken(token:string): Promise<void> {
    await prisma.tokens.delete({ where: { token }});
}

