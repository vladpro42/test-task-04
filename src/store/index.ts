import { createStore } from "redux";
import { notesReducer } from "../module/Notes/reducer";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    notes: notesReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

