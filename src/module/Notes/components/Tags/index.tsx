import { INote } from "../../reducer/types";
import { getArrayTegsFormState } from "../../utils/utils";
import { Button, Flex } from 'antd';

interface IProps {
    notes: INote[],
    active: string[],
    setActive: React.Dispatch<React.SetStateAction<string[]>>
}

const Tags = ({ notes, active, setActive }: IProps) => {

    const arrTegs = getArrayTegsFormState(notes);


    const onClick = (e: React.MouseEvent<HTMLElement>, item: string) => {
        if (!active.includes(item)) {
            setActive([...active, item])
        }
    }


    return <ul className='nav__list'>
        <Button danger onClick={() => setActive([])} className="nav">Очистить</Button>
        {
            arrTegs.map((item, index) => <Button

                size="large"
                key={index}
                onClick={e => onClick(e, item)}
                className='nav'
                type={active.includes(item) ? "primary" : "default"}
            >

                <span className={active.includes(item) ? "nav__list_active" : ""}>{item}</span>
            </Button>)
        }
    </ul >
}

export default Tags