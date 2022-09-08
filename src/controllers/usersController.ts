import { Request, Response } from "express";
import * as usersService from "../services/usersService"
import { Users } from "@prisma/client"

export async function createUser(req: Request, res: Response): Promise<void> { 
    const { email, password }: Users = req.body;
    usersService.checkUserEmail(email);
    const criptPassword: any = usersService.criptPassword(password);
    usersService.registerUser(email,criptPassword);
    res.sendStatus(201);
}