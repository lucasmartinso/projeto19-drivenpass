import joi from "joi"; 

export const credentialsSchema = joi.object({ 
    title: joi.string().min(3).max(30).required().label('Invalid title, must be between 3 and 50 characters'), 
    url: joi.string().uri().required().label('Invalid url, has to be a url'),
    username: joi.string().min(4).max(30).required().label('Invalid username, must be between 4 and 30 characters'), 
    password: joi.string().pattern(/^[a-zA-Z0-9"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ".", ":", ";", "|","~","`","{","}","<",">","?","/"]{10,}/).required().label('Invalid password, must be at least 10 characters')
})