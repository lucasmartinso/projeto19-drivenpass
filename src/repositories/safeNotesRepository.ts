import prisma from "../databases/prisma";
import { safeNotes } from "@prisma/client"; 

export async function createNote({userId, title, description}: Omit<safeNotes , 'id' | 'createdAt'>): Promise<void> { 
    await prisma.safeNotes.create({ data: { userId, title, description }});
} 

export async function findUserTitle(userId: number, title: string): Promise<safeNotes | null> {
    const result: safeNotes | null = await prisma.safeNotes.findFirst({ where: { userId, title }});
    
    return result;
}

export async function findUserNotes(userId: number): Promise<safeNotes[]> { 
    const result: safeNotes[] = await prisma.safeNotes.findMany({ where: { userId }}); 

    return result;
} 

export async function findNote(credentialId: number): Promise<safeNotes | null> { 
    const result: safeNotes | null = await prisma.safeNotes.findUnique({ where: { id: credentialId }});

    return result;
} 

export async function deleteNote(noteId:  number): Promise<void> { 
    await prisma.safeNotes.delete({ where: {id: noteId}});
}