import React from "react";
import { useSetRecoilState } from "recoil";
import {IToDo, toDoState} from "../atoms";

function ToDo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event
        console.log(name)
    }

    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && (<button name="DOING" onClick={onClick}></button>)}
            {category !== "TO_DO" && (<button name="TO_DO" onClick={onClick}></button>)}
            {category !== "DONE" && (<button name="DONE" onClick={onClick}></button>)}
        </li>
    )
}

export default ToDo;