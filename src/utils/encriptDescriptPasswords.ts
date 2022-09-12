import Cryptr from "cryptr";

export async function criptPassword(password: string): Promise<string> {
    const cryptr = new Cryptr('myTotallySecretKey');
    const cript: string = cryptr.encrypt(password); 

    return cript;
}

export async function descriptPassword(password: string) { 
    const cryptr = new Cryptr('myTotallySecretKey');
    const descript: string = cryptr.decrypt(password); 

    return descript;
}