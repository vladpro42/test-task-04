import { useState } from "react"
import { getFilter } from "../../utils/utils"
import { INote } from "../../types/NotesTypes"
import { Form, Button, Input } from "antd"

const FormNote = ({ setNodes }: { setNodes: React.Dispatch<React.SetStateAction<INote[]>> }) => {

    const [value, setValue] = useState("")


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const payload = {
            id: window.crypto.randomUUID(),
            note: value,
            filter: []
        }

        console.log(payload)

        setNodes(prev => [...prev, payload])

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