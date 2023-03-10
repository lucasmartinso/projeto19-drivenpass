import joi from "joi"; 

export const safeNotesSchema = joi.object({ 
    title: joi.string().min(3).max(50).required().label('Invalid title, must be between 3 and 50 characters'), 
    description: joi.string().max(1000).required().label('Invalid description, max 1000 characters')
})