import bcrypt from "bcrypt";
import { findEmail, postUser }from "../repositories/usersRepository"

export async function checkUserEmail(email: string): Promise<void> { 
    const existEmail: object | null = await findEmail(email);
    if(existEmail) { 
        throw { code: "Unathorized", message: "This email already exist"}
    }

    console.log(existEmail);
} 

export function criptPassword(password: string): string { 
    const cript = bcrypt.hashSync(password,10);
    return cript;
}

export async function registerUser(email: string, criptPassword: string) {
    await postUser(email,criptPassword);
}