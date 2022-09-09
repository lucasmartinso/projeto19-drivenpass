import { Request, Response } from "express";
import * as usersService from "../services/usersService";
import { Users } from "@prisma/client";

export async function createUser(req: Request, res: Response): Promise<void> { 
    const { email, password }: Users = req.body;
    await usersService.checkUserEmail(email);
    const criptPassword: string = usersService.criptPassword(password);
    await usersService.registerUser(email,criptPassword);

    res.sendStatus(201);
}

export async function login(req: Request, res: Response): Promise<void> { 
    const { email, password }: Users = req.body;
    const id: number | undefined = await usersService.verifyUserData(email,password);
    const token: string = await usersService.gerateToken(id,email);

    res.status(200).send({token});
} 

export async function logout(req: Request, res: Response): Promise<void> { 
    const token: string = res.locals.token;
    await usersService.logout(token);

    res.sendStatus(204);
}