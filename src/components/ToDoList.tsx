import { useRecoilState, useRecoilValue } from "recoil";
import {Categories, toDoSelector, categoryState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //const [toDo,doing,done] = useRecoilValue(toDoSelector)
  const toDos = useRecoilValue(toDoSelector)
  const [category, setCategory] = useRecoilState(categoryState)
  let tag:string = ""
  const onInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)

  }
  


  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO_DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      <h2>{tag}</h2>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo}/>
      ))}
     
    </div>
  );
}

export default ToDoList;