import joi from "joi"; 

export const credentialsSchema = joi.object({ 
    title: joi.string().min(3).max(30).required(), 
    url: joi.string().uri().required(),
    username: joi.string().min(4).max(30).required(), 
    password: joi.string().pattern(/^[a-zA-Z0-9"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ".", ":", ";", "|","~","`","{","}","<",">","?","/"]{10,}/).required()
})