import { initState } from "../indexDb"
import { ActionChangeNote, ActionDeleteNote, INote, IdNote } from "./types";
import { ActionAddNote, ActionNote, NotesActionEnum } from "./types"

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("notes");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

let myState: INote[] = loadState() ? loadState() : initState

function saveLocalStorage(state: INote[]) {
    localStorage.setItem("notes", JSON.stringify(state))
}

export function notesReducer(state = myState, action: ActionNote) {


    switch (action.type) {
        case NotesActionEnum.addNote: {
            const newState = [...state, action.payload]
            saveLocalStorage(newState)
            return newState
        }
        case NotesActionEnum.deleteNote: {
            const newState = [...state].filter(item => item.id !== action.payload)
            saveLocalStorage(newState)
            return newState
        }
        case NotesActionEnum.changeNote: {
            const newState = [...state].filter(item => {
                if (item.id === action.payload.id) {
                    item.note = action.payload.note
                }
                return item
            })
            return newState
        }
        default:
            return state
    }


}



//action creator

export const addNote = (value: INote): ActionAddNote => ({
    type: NotesActionEnum.addNote,
    payload: value
})


export const deleteNote = (value: IdNote): ActionDeleteNote => ({
    type: NotesActionEnum.deleteNote,
    payload: value
})

export const changeNote = (value: INote): ActionChangeNote => ({
    type: NotesActionEnum.changeNote,
    payload: value
})




