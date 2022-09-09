import { Users } from "@prisma/client";
import * as utilsRepository from "../utils/findUserRepository";

export async function findUser(id: number): Promise<void> {
    const userData: Users | null = await utilsRepository.findUser(id);

    console.log(userData);

    if(!userData) throw { code: "Not Found", message: "This user aren't registred at database"};
}