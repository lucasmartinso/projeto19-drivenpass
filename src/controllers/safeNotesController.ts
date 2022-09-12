import { safeNotes, tokens } from "@prisma/client"; 
import { Request, Response } from "express"; 
import * as safeNotesService from "../services/safeNotesService";
import * as utilsService from "../utils/findUserService";

export async function createNote(req: Request, res: Response): Promise<void> {
    const { userId }: tokens  = res.locals.user; 
    const { title, description }: safeNotes = req.body;
    
    await utilsService.findUser(userId);

    const noteData: Omit<safeNotes, 'id' | 'createdAt'> = { 
        userId, 
        title, 
        description
    } 

    await safeNotesService.verifyUserRepeteadNotes(noteData);
    await safeNotesService.createNote(noteData);
    
    res.sendStatus(201);
}  

export async function findNote(req: Request, res: Response) {
    const { userId }: tokens  = res.locals.user;
    const id: number = Number(req.params.id);

    const userNotes: safeNotes = await safeNotesService.getNote(id,userId);
    
    res.status(200).send(userNotes);
}

export async function getAllNotes(req: Request, res: Response) {
    const { userId }: tokens  = res.locals.user;

    const userNotes = await safeNotesService.getAllNotes(userId); 
    
    res.status(200).json({
        notes: userNotes
    });
} 
    
export async function deleteNotes(req: Request, res: Response) { 
    const { userId }: tokens  = res.locals.user;
    const safeNoteId: number = Number(req.params.id);

    await safeNotesService.deleteNote(safeNoteId,userId);

    res.sendStatus(204); 
}

