import { useState } from "react"
import FormNote from "./components/FormNote"
import Tags from "./components/Tags"
import { Typography } from "antd"
import { useAppDispatch, useAppSelect } from "../../hooks/hooks"
import NotesList from "./components/NotesList"
import { addNote } from "./reducer"
import { INote } from "./reducer/types"
import { Input, Button } from "antd"


const Notes = () => {

    const notes = useAppSelect(state => state.notes)

    const dispatch = useAppDispatch()

    const [active, setActive] = useState<string[]>([])
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

    return <div>
        <div className="form">
            <Typography.Title level={1}>Заметки</Typography.Title>
            <FormNote>
                <Input className="form__input" placeholder="Enter Note" value={value} onChange={onChange} />
                <Button type="primary" onClick={e => onSubmit(e)}>
                    Создать
                </Button>
            </FormNote>
        </div>

        <Tags notes={notes} active={active} setActive={setActive} />


        <NotesList notes={notes} active={active} />
    </div>
}

export default Notes;