import { credentials } from "@prisma/client";
import * as credentialsRepository from "../repositories/credentialsRepository"
import { criptPassword, descriptPassword } from "../utils/encriptDescriptPasswords";

export async function createCredentials(credentialsData: Omit<credentials, 'id' | 'createdAt'>) {
    const encriptPassword = await criptPassword(credentialsData.password);
    await credentialsRepository.postCredentials({...credentialsData, password: encriptPassword});
} 

export async function verifyUserRepeteadCredentials({userId,title}: Omit<credentials, 'id' | 'createdAt'>) {
    const repeteadTitle = await credentialsRepository.findUserTitle(userId,title);
    if(repeteadTitle) throw { code: "Bad Request", message: "This title already has been declareted by this user"};
}

export async function getAllCredentials(userId: number) { 
    const userCredentials: credentials[] = await credentialsRepository.findUserCredentials(userId);

    for(let i=0; i<userCredentials.length; i++) { 
        userCredentials[i].password = await descriptPassword(userCredentials[i].password);
    }

    return userCredentials;
} 

export async function getCredential(id: number, userId: number) {
    const userCredential: credentials | null = await credentialsRepository.findCredential(id);

    if(!userCredential) throw { code: "Not Found", message:  "This credentials don't exist yet"}

    if(userCredential.userId !== userId) throw { code: "Not Found", message:  "This credentials don't belongs to you"} 

    userCredential.password = await descriptPassword(userCredential.password);

    return userCredential;
}