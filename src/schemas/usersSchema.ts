import joi from "joi";

export const userSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().label('Invalid email, has to follow email format **@**.com or **@**.net'),
    password: joi.string().pattern(/^[a-zA-Z0-9"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ".", ":", ";", "|","~","`","{","}","<",">","?","/"]{10,}/).required().label('Invalid password, min 10 characters')
}); 