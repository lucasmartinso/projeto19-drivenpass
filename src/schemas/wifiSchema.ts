import joi from "joi"; 

export const wifiSchema = joi.object({ 
    title: joi.string().min(3).max(50).required(), 
    name: joi.string().min(3).max(50).required(), 
    password: joi.string().pattern(/^[a-zA-Z0-9"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ".", ":", ";", "|","~","`","{","}","<",">","?","/"]{10,}/).required()
})