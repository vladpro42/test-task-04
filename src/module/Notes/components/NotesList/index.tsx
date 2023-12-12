import { INote } from "../../reducer/types";
import NoteItem from "../NoteItem";

const NotesList = ({ notes, active }: { notes: INote[], active: string[] }) => {

    return <ul className='notes__list'>
        {
            notes.filter((item) => {

                if (active.length === 0) {
                    return item
                }

                for (let index = 0; index < active.length; index++) {
                    const element = active[index];
                    if (item.note.includes(element)) {
                        return item
                    }
                }

            }).map(item => <NoteItem key={item.id} note={item} />)
        }
    </ul>
}

export default NotesList