import { useState } from "react"
import { INote } from "../../reducer/types"
import { Button, Input } from "antd"
import { Dispatch } from "redux"
import { addNote } from "../../reducer"
import { ActionAddNote } from "../../reducer/types"

const FormNote = ({ dispatch }: { dispatch: Dispatch<ActionAddNote> }) => {

    const [value, setValue] = useState("")


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const payload: INote = {
            id: window.crypto.randomUUID(),
            note: value,
        }

        dispatch(addNote(payload))
        setValue("")
    }

    return <>
        <Input className="form__input" placeholder="Enter Note" value={value} onChange={onChange} />
        <Button type="primary" onClick={e => onSubmit(e)}>
            Создать
        </Button>
    </>
}

export default FormNote