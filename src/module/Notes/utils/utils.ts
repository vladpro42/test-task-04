import { INote } from "../types/NotesTypes";

export function getFilter(str: string): string[] {
    const arr = str.split(" ");
    let res: string[] = []
    arr.forEach((item) => {
        if (item.includes("#")) {
            res.push(item)
        }
    })
    return res
}

export function getArrayTegsFormState(state: INote[]): string[] {
    const arrTegs: string[] = []
    state.forEach(item => arrTegs.push(...getFilter(item.note)))
    return [...new Set(arrTegs)]
}
