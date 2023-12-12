import { useState } from "react"
import { ActionAddNote, ActionChangeNote, ActionNote, INote } from "../../reducer/types"
import { Button, Input } from "antd"
import { useAppDispatch } from "../../../../hooks/hooks"



function FormNote({ children }: { children: React.ReactNode }) {

    return <form>
        {children}
    </form>
}

export default FormNote