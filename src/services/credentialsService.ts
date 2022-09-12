import { credentials } from "@prisma/client";
import * as credentialsRepository from "../repositories/credentialsRepository"
import { criptPassword, descriptPassword } from "../utils/encriptDescriptPasswords";

async function verifyCredential(id: number, userId: number): Promise<credentials> { 
    const userCredential: credentials | null = await credentialsRepository.findCredential(id);

    if(!userCredential) throw { code: "Not Found", message:  "This credentials don't exist yet"}

    if(userCredential.userId !== userId) throw { code: "Not Found", message:  "This credentials don't belongs to you"} 

    return userCredential;
}

export async function createCredentials(credentialsData: Omit<credentials, 'id' | 'createdAt'>) {
    const encriptPassword = await criptPassword(credentialsData.password);
    await credentialsRepository.postCredentials({...credentialsData, password: encriptPassword});
} 

export async function verifyUserRepeteadCredentials({userId,title}: Omit<credentials, 'id' | 'createdAt'>) {
    const repeteadTitle = await credentialsRepository.findUserTitle(userId,title);
    if(repeteadTitle) throw { code: "Bad Request", message: "This title already has been declareted by this user"};
}

export async function getCredential(id: number, userId: number):  Promise<credentials> {
    const userCredential: credentials | null = await verifyCredential(id,userId);

    userCredential.password = await descriptPassword(userCredential.password);

    return userCredential;
} 

export async function getAllCredentials(userId: number): Promise<credentials[]> { 
    const userCredentials: credentials[] = await credentialsRepository.findUserCredentials(userId);

    for(let i=0; i<userCredentials.length; i++) { 
        userCredentials[i].password = await descriptPassword(userCredentials[i].password);
    }

    return userCredentials;
}  

export async function deleteCredential(credentialId: number, userId: number): Promise<void> {
    await verifyCredential(credentialId,userId);

    await credentialsRepository.deletCredential(credentialId);
}

