import { safeNotes } from "@prisma/client";
import * as safeNotesRepository from "../repositories/safeNotesRepository"

async function verifyNote(id: number, userId: number): Promise<safeNotes> { 
    const userNote: safeNotes | null = await safeNotesRepository.findNote(id);

    if(!userNote) throw { code: "Not Found", message:  "This safe note don't exist yet"}

    if(userNote.userId !== userId) throw { code: "Not Found", message:  "This safe note don't belongs to you"} 

    return userNote;
}

export async function createNote(noteData: Omit<safeNotes, 'id' | 'createdAt'>) {
    await safeNotesRepository.createNote(noteData);
} 

export async function verifyUserRepeteadNotes({userId,title}: Omit<safeNotes, 'id' | 'createdAt'>) {
    const repeteadTitle = await safeNotesRepository.findUserTitle(userId,title);
    if(repeteadTitle) throw { code: "Bad Request", message: "This title already has been declareted by this user"};
}

export async function getNote(id: number, userId: number):  Promise<safeNotes> {
    const userNote: safeNotes | null = await verifyNote(id,userId);

    return userNote;
} 

export async function getAllNotes(userId: number): Promise<safeNotes[]> { 
    const userNotes: safeNotes[] = await safeNotesRepository.findUserNotes(userId);

    return userNotes;
}  

export async function deleteNote(noteId: number, userId: number): Promise<void> {
    await verifyNote(noteId,userId);

    await safeNotesRepository.deleteNote(noteId);
}

