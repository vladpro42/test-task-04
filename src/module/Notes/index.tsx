import { useState } from "react"
import { initState } from "./indexDb"
import FormNote from "./components/FormNote"
import Tags from "./components/Tags"
import { Typography } from "antd"

const Notes = () => {

    const [notes, setNodes] = useState(initState)
    const [active, setActive] = useState<string[]>([])


    return <div>
        <div className="form">
            <Typography.Title level={1}>Заметки</Typography.Title>
            <FormNote setNodes={setNodes} />
        </div>

        <Tags notes={notes} active={active} setActive={setActive} />


        <ul className='notes__list'>
            {
                notes.filter((item, index) => {

                    if (active.length === 0) {
                        return item
                    }

                    for (let index = 0; index < active.length; index++) {
                        const element = active[index];
                        if (item.note.includes(element)) {
                            return item
                        }
                    }

                }).map(item => {
                    const indexTeg = item.note.indexOf("#")

                    if (indexTeg == -1) {
                        return <li className="notes" key={item.id}>
                            {item.note}
                        </li>
                    }

                    const part1 = item.note.slice(indexTeg)
                    const startOfStr = item.note.slice(0, indexTeg)
                    const wordWithHashTag = part1.split(" ")[0] || ""
                    const endOfStr = part1.split(" ")[1] || ""

                    return <li className="notes" key={item.id}>
                        {startOfStr}
                        <span className="notes__tags">&nbsp;{wordWithHashTag}&nbsp;</span>
                        {endOfStr}
                    </li>
                })
            }
        </ul>
    </div>
}

export default Notes;