import React from "react";
import { useSetRecoilState } from "recoil";
import {Categories, IToDo, toDoState} from "../atoms";

function ToDo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = event
    
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text:text, id, category:name as any}; 
            return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)]
        })
    }
    /*
        1. TO_DO 중 하나가 DONE으로 바뀐다면 
            1) button의 onClick 실행
            2) setToDos 실행
            3) DONE 이 클릭되었기에 name에는 DONE이 저장
            4) 그 전의 toDos 리스트에서 현재 카테고리가 바뀐 task의 index를 찾음
            5) 그리고 새롭게 업데이트된 newToDo를 만들고
            6) 카테고리가 DONE으로 업데이트된 task를 포함한 새로운 배열을 리턴
            7) toDos 업데이트
            8) 그 결과 다시 ToDoList로 이동

    */
    return (
        <li>
            <span>{text}</span>
            {/*If category is not "Doing", I will treat it "Doing"*/}
            {category !== Categories.DOING && (<button name={Categories.DOING} onClick={onClick}>DOING</button>)}
            {category !== Categories.TO_DO && (<button name={Categories.TO_DO} onClick={onClick}>TO_DO</button>)}
            {/*If category is not "Done", I will treat this task is not "DONE".*/}
            {category !== Categories.DONE && (<button name={ Categories.DONE} onClick={onClick}>DONE</button>)}
        </li>
    )
}

export default ToDo;