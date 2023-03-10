import joi from "joi"; 

export const wifiSchema = joi.object({ 
    title: joi.string().min(3).max(50).required().label('Invalid title, must be between 3 and 50 characters'), 
    name: joi.string().min(3).max(50).required().label('Invalid name, must be between 3 and 50 characters'), 
    password: joi.string().pattern(/^[a-zA-Z0-9"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ".", ":", ";", "|","~","`","{","}","<",">","?","/"]{10,}/).required().label('Invalid password, must be at least 10 characters')
})