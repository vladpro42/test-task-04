import { UUID } from "crypto"

export interface INote {
    id: number | string | UUID,
    note: string,
    filter: string[]
}