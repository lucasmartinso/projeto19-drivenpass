import { credentials } from "@prisma/client";
import * as credentialsRepository from "../repositories/credentialsRepository"
import { criptPassword } from "../utils/criptPasswords";

export async function createCredentials(credentialsData: Omit<credentials, 'id' | 'createdAt'>) {
    const encriptPassword = await criptPassword(credentialsData.password);
    await credentialsRepository.postCredentials({...credentialsData, password: encriptPassword});
} 

export async function verifyUserRepeteadCredentials({userId,title}: Omit<credentials, 'id' | 'createdAt'>) {
    const repeteadTitle = await credentialsRepository.findUserTitle(userId,title);
    if(repeteadTitle) throw { code: "Bad Request", message: "This title already has been declareted by this user"};
}