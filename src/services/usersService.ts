import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";
import { findEmail, postUser }from "../repositories/usersRepository"

async function emailSearch(email: string): Promise<Users | null> { 
    const userData = await findEmail(email);
    return userData;
}

export function gerateToken(email: string): string { 
    const token = jwt.sign({email: email},'secret');
    return token;
}

export async function checkUserEmail(email: string):  Promise<void>{ 
    const existEmail: Users | null = await emailSearch(email);

    if(existEmail) { 
        throw { code: "Unathorized", message: "This email already exist"}
    }
} 

export function criptPassword(password: string): string { 
    const cript = bcrypt.hashSync(password,10);

    return cript;
}

export async function registerUser(email: string, criptPassword: string): Promise<void> {
    await postUser(email,criptPassword);    
}

export async function verifyUserData(email: string, password: string) {
    const userData: Users | null = await emailSearch(email);
    
    if(userData) {
        const verifyPassword: boolean = bcrypt.compareSync(password,userData?.password);
        
        if(!verifyPassword) { 
            throw { code: "Unathorized", message: "Wrong password"}
        }
    }
}