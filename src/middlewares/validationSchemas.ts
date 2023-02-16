import { Request, Response, NextFunction } from "express"; 
import { ObjectSchema } from "joi";

export default function schemaValidation(schema: ObjectSchema) { 
    return(req: Request, res: Response, next: NextFunction) => { 
        const validation = schema.validate(req.body);
        if(validation.error) { 
            console.log(validation.error.details[0].context?.label);
            throw { code: "Unprocessable Entity", message: validation.error.details[0].context?.label}
        }

        next();
    }
}