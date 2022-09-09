import Cryptr from "cryptr";

export async function criptPassword(password: string): Promise<string> {
    const cryptr = new Cryptr('myTotallySecretKey');
    const cript = cryptr.encrypt(password); 

    return cript;
}