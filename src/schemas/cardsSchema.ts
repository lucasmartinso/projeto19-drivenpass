import joi from "joi"; 

export const cardsSchema = joi.object({ 
    title: joi.string().min(3).max(50).required().label('Invalid title, must be between 3 and 50 characters'),
    number: joi.string().pattern(/^[0-9]{16}$/).required().label('Invalid card number, must have exactly 16 numbers'), 
    name: joi.string().min(3).max(50).required().label('Invalid name, must be between 3 and 50 characters'), 
    cvc: joi.string().pattern(/^[0-9]{3}$/).required().label('Invalid name, must have exactly 3 numbers'), 
    expirateDate: joi.string().pattern(/^[0-9]{4}\-(0[1-9]|10|11|12)$/).required().label('Invalid expirate date, has to be a date ex: 12/99'), 
    password: joi.string().pattern(/^[0-9]{4,6}$/).required().label('Invalid password, must be between 4 and 6 characters'), 
    isVirtual: joi.boolean().required().label('Invalid virtual type, has to be true or false'), 
    type: joi.string().valid("credit", "debit", "both").required().label('Invalid type, has to be credit or debit or both')
})