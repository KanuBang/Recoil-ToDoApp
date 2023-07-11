import {atom, selector} from "recoil";

// toDoState의 인터페이스
export interface IToDo {
    text:string;
    id:number;
    category: "TO_DO" | "DOING" | "DONE"; // 이 세가 중 한 가지만 가능, or느낌
}
 
// toDoState은 IToDo 인터페이스 값만 허용하는 리스트다.
export const toDoState = atom<IToDo[]>({
    key: "todo",
    default: []
})

export const categoryState = atom({
    key: "category",
    default: "TO_DO"
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
        /*
        return [
            toDos.filter(toDos => toDos.category === "TO_DO"),
            toDos.filter(toDos => toDos.category === "DOING"),
            toDos.filter(toDos => toDos.category === "DONE")
        ]
        */
       const category = get(categoryState)
       return toDos.filter((toDo) => toDo.category === category)
    }
})