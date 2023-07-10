import React from "react";
import { useSetRecoilState } from "recoil";
import {IToDo, toDoState} from "../atoms";

function ToDo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event
        //여기서 name은 category이름임
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text:text, id, category:name as any}; 
            // ES6문법
            // as any => 타입 체킹 회피: 여기서 name은 stirng이고 categoty는 category: "TO_DO" | "DOING" | "DONE"; 
            // 이런 상황이라 타입 체킹 회피
            return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)]
        })
    }

    return (
        <li>
            <span>{text}</span>
            {/*If category is not "Doing", I will treat it "Doing"*/}
            {category !== "DOING" && (<button name="DOING" onClick={onClick}>DOING</button>)}
            {category !== "TO_DO" && (<button name="TO_DO" onClick={onClick}>TO_DO</button>)}
            {/*If category is not "Done", I will treat this task is not "DONE".*/}
            {category !== "DONE" && (<button name="DONE" onClick={onClick}>DONE</button>)}
        </li>
    )
}

export default ToDo;