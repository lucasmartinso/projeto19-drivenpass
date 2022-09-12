import { tokens } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { any } from "joi";
import * as usersService from "../services/usersService";

export async function validateTokenAuth(req: Request, res: Response, next: NextFunction) { 
    const { authorization }: any = req.headers;
    const tokenAuth: string = authorization?.replace("Bearer ", ""); 

    if(!tokenAuth) throw { code: "Unathorized", message: "Insert a token auth"};

    const exist: tokens | null = await usersService.existToken(tokenAuth);

    if(!tokenAuth || !exist) { 
        throw { code: "Unathorized", message: "This token don't exist or not persist to this user"};
    } 

    res.locals.token = tokenAuth;
    res.locals.user = exist;

    next();
}