import bcrypt from "bcrypt";
import { Users } from "@prisma/client";
import { findEmail, postUser }from "../repositories/usersRepository"

export async function checkUserEmail(email: string): Promise<void> { 
    const existEmail: Users | null = await findEmail(email);
    
    if(existEmail) { 
        throw { code: "Unathorized", message: "This email already exist"}
    }
} 

export function criptPassword(password: string): string { 
    const cript = bcrypt.hashSync(password,10);

    return cript;
}

export async function registerUser(email: string, criptPassword: string) {
    await postUser(email,criptPassword);    
}