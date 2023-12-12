import React, { memo, useState } from "react";
import { INote } from "../../reducer/types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { useAppDispatch } from "../../../../hooks/hooks";
import { changeNote, deleteNote } from "../../reducer";
import FormNote from "../FormNote";

const NoteItem = memo(({ note }: { note: INote }) => {

    const indexTeg = note.note.indexOf("#")

    const dispatch = useAppDispatch()

    const [isPopup, setIsPopup] = useState(false)
    const [input, setInput] = useState("")

    if (indexTeg == -1) {
        return <li className="notes" key={note.id}>
            {note.note}
            <DeleteOutlined onClick={() => dispatch(deleteNote(note.id))} style={{ marginLeft: "15px", cursor: "pointer" }} />
            <EditOutlined style={{ marginLeft: "15px", cursor: "pointer" }} />
        </li>
    }

    const onCLickShowPopup = (e: React.MouseEvent<HTMLElement>, note: INote) => {
        setIsPopup(true)
        setInput(note.note)
    }

    const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const payload = {
            id: note.id,
            note: input
        }
        dispatch(changeNote(payload))
        setIsPopup(false)
    }

    const part1 = note.note.slice(indexTeg)
    const startOfStr = note.note.slice(0, indexTeg)
    const wordWithHashTag = part1.split(" ")[0] || ""
    const endOfStr = part1.split(" ")[1] || ""
    return <li className="notes" key={note.id}>
        {startOfStr}
        <span className="notes__tags">&nbsp;{wordWithHashTag}&nbsp;</span>
        {endOfStr}
        <DeleteOutlined onClick={() => dispatch(deleteNote(note.id))} style={{ marginLeft: "15px", cursor: "pointer" }} />
        <EditOutlined onClick={(e) => onCLickShowPopup(e, note)} style={{ marginLeft: "15px", cursor: "pointer" }} />

        {isPopup && <div className={isPopup ? "popup popup_active" : "popup"} onClick={() => setIsPopup(false)}>
            <div className="popup__container" onClick={e => e.stopPropagation()} >
                <h1>Change Note</h1>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button onClick={e => onClickSubmit(e)}>изменить</button>
            </div>
        </div>}
    </li>
})

export default NoteItem;