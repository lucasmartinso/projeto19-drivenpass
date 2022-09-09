import { credentials } from "@prisma/client";
import { Request, Response } from "express"; 
import * as credentialsService from "../services/credentialsService";
import * as utilsService from "../utils/findUserService";


export async function createCredentials(req: Request, res: Response): Promise<void> {
    const id: number = Number(req.params.id);
    const { title, url, username, password }: Omit<credentials, 'id' | 'userId'> = req.body;

    await utilsService.findUser(id);
    const credentialsData: Omit<credentials, 'id' | 'createdAt'> = { 
        userId: id,
        title,
        url, 
        username, 
        password
    }
    await credentialsService.verifyUserRepeteadCredentials(credentialsData);
    await credentialsService.createCredentials(credentialsData);
    res.sendStatus(201);
}