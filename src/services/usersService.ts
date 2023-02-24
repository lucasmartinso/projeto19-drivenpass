import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";
import { deleteToken, findEmail, findToken, postToken, postUser }from "../repositories/usersRepository"

async function emailSearch(email: string): Promise<Users | null> { 
    const userData: Users | null = await findEmail(email);

    if(!userData) throw { code: "Not Found", message: "This email doesn't exist" } 

    return userData;
}

export async function gerateToken( id: number | undefined, email: string) { 
    const token: string = jwt.sign({email: email},'secret',{ expiresIn: '10h' });
    if(id) await postToken(id,token);
    return token;
}

export async function existToken(token: string) { 
    const existToken = await findToken(token);
    return existToken;
}

export async function checkUserEmail(email: string):  Promise<void>{ 
    const existEmail: Users | null = await findEmail(email);

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
        } else { 
            return userData.id;
        }
    }
}

export async function logout(token: string) { 
    await deleteToken(token);
}