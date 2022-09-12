import joi from "joi"; 

export const cardsSchema = joi.object({ 
    title: joi.string().min(3).max(50).required(),
    number: joi.string().pattern(/^[0-9]{16}$/).required(), 
    name: joi.string().min(3).max(50).required(), 
    cvc: joi.string().pattern(/^[0-9]{3}$/).required(), 
    expirateDate: joi.string().pattern(/^(0[1-9]|10|11|12)\/[0-9]{2}$/).required(), 
    password: joi.string().pattern(/^[0-9]{4,6}$/).required(), 
    isVirtual: joi.boolean().required(), 
    type: joi.string().valid("credit", "debit", "both").required()
})