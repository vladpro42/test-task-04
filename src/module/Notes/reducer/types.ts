import { UUID } from "crypto"

export type IdNote = number | string | UUID

export interface INote {
    id: IdNote,
    note: string,
}


export enum NotesActionEnum {
    addNote = "addNote",
    deleteNote = "deleteNote",
    changeNote = "changeNote"
}

export interface ActionAddNote {
    type: NotesActionEnum.addNote,
    payload: INote
}

export interface ActionDeleteNote {
    type: NotesActionEnum.deleteNote,
    payload: IdNote
}

export interface ActionChangeNote {
    type: NotesActionEnum.changeNote,
    payload: INote
}


export type ActionNote =
    ActionAddNote |
    ActionDeleteNote |
    ActionChangeNote