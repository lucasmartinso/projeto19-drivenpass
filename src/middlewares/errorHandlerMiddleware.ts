import { Request, Response, NextFunction } from "express";

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) { 
    console.log(error);
    if(error.code === "Unprocessable Entity") {
        return res.status(422).send(error.message);
    } else if(error.code === "Unathorized") { 
        return res.status(401).send(error.message);
    }
    return res.sendStatus(500);
}