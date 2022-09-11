import { credentials, tokens } from "@prisma/client";
import { Request, Response } from "express"; 
import * as credentialsService from "../services/credentialsService";
import * as utilsService from "../utils/findUserService";


export async function createCredentials(req: Request, res: Response): Promise<void> {
    const { userId }: tokens  = res.locals.user;
    const { title, url, username, password }: Omit<credentials, 'id' | 'userId'> = req.body;

    await utilsService.findUser(userId);
    const credentialsData: Omit<credentials, 'id' | 'createdAt'> = { 
        userId: userId,
        title,
        url, 
        username, 
        password
    }
    await credentialsService.verifyUserRepeteadCredentials(credentialsData);
    await credentialsService.createCredentials(credentialsData);
    res.sendStatus(201);
}  

export async function findCredential(req: Request, res: Response) {
    const { userId }: tokens  = res.locals.user;
    const id: number = Number(req.params.id);

    const userCredential: credentials = await credentialsService.getCredential(id,userId);
    
    res.status(200).send(userCredential);
}

export async function getAllCredentials(req: Request, res: Response) {
    const { userId }: tokens  = res.locals.user;

    const userCredentials = await credentialsService.getAllCredentials(userId); 
    
    res.status(200).json({
        credentials: userCredentials
    });
} 

export async function deleteCredentials(req: Request, res: Response) { 
    const { userId }: tokens  = res.locals.user;
    const credentialId: number = Number(req.params.id);

    await credentialsService.deleteCredential(credentialId,userId);

    res.sendStatus(204); 
}

