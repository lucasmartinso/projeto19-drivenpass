import { Request, Response } from "express";
import * as usersService from "../services/usersService"
import { Users } from "@prisma/client"

export async function createUser(req: Request, res: Response) { 
    const { email, password }: Users = req.body;
    await usersService.checkUserEmail(email);
    const criptPassword: string = usersService.criptPassword(password);
    await usersService.registerUser(email,criptPassword);
    return res.sendStatus(201);
}