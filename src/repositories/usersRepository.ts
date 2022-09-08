import prisma from "../databases/prisma";
import { Users } from "@prisma/client";

export async function findEmail(email: string): Promise<Users | null> { 
    const result = await prisma.users.findFirst({ where: { email } });

    return result;
} 

export async function postUser(email: string, password: string): Promise<void> { 
    await prisma.users.create({ data: { email, password }});
}    


