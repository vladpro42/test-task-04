import { useEffect, useState } from "react"
import FormNote from "./components/FormNote"
import Tags from "./components/Tags"
import { Typography } from "antd"
import { useAppDispatch, useAppSelect } from "../../hooks/hooks"
import NotesList from "./components/NotesList"

const Notes = () => {

    const notes = useAppSelect(state => state.notes)
    const dispatch = useAppDispatch()
    const [active, setActive] = useState<string[]>([])

    return <div>
        <div className="form">
            <Typography.Title level={1}>Заметки</Typography.Title>
            <FormNote dispatch={dispatch} />
        </div>

        <Tags notes={notes} active={active} setActive={setActive} />


        <NotesList notes={notes} active={active} />
    </div>
}

export default Notes;