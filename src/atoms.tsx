import {atom, selector} from "recoil";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}
// toDoState의 인터페이스
export interface IToDo {
    text:string;
    id:number;
    category: Categories; // 이 세가 중 한 가지만 가능, or느낌
}
 
// task 저장
export const toDoState = atom<IToDo[]>({
    key: "todo",
    default: []
})

// task category 저장
export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
       const category = get(categoryState)
       return toDos.filter((toDo) => toDo.category === category)
    }
})