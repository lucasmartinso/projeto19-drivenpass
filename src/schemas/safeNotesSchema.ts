import joi from "joi"; 

export const safeNotesSchema = joi.object({ 
    title: joi.string().min(3).max(50).required(), 
    description: joi.string().max(1000).required()
})