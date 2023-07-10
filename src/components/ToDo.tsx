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
            // li 클릭 => onClick 이벤트에 등록된 onClick 핸들러 실행
            // 먼저 button의 name 값을 currentTarget.name으로 가져옴
            // recoil setter 함수로 oldToDos 리스트를 받아옴
            // 그 다음 oldToDos의 요소 하나 하나와 현재 클릭된 요소의 id가 같은 것을 찾음
            // 만약 클릭된 요소와 oldToDos에 클릭된 요소가 같다면 그 클리된 요소를 리턴하여 targetIndex에 저장
            // 그 다음 새로운 카테고리를 반영한 객체를 생성
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text:text, id, category:name}; // ES6문법
            console.log(newToDo)
            return oldToDos
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