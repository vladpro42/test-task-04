import { INote } from "./types/NotesTypes"

export const initState: INote[] = [
    {
        id: 1,
        note: "I wanna go to the #shop today",
        filter: ["shop"]
    },
    {
        id: 2,
        note: "go to the #gym",
        filter: ["gym"]
    },
    {
        id: 3,
        note: "buy something",
        filter: []
    },
    {
        id: 4,
        note: "#cook dinner",
        filter: ["cook"]
    },
    {
        id: 5,
        note: "I need to #learn English",
        filter: ["learn"]
    },
    {
        id: 6,
        note: "train in the #gym",
        filter: ["gym"]
    },
]