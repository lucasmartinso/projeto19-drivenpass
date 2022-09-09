import { Users } from "@prisma/client";
import prisma from "../databases/prisma";

export async function findUser(id: number): Promise<Users | null> {
    const result: Users | null = await prisma.users.findUnique({ where: { id }});

    return result;
}