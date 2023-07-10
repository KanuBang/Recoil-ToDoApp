import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      {/*CreateToDo 컴포넌트는 todo를 생성하는 form임.*/}
      <CreateToDo />

      <ul>
        {/*
        toDos는 전역 state로
        export interface IToDo {
          text:string;
          id:number;
          category: "TO_DO" | "DOING" | "DONE"; // 이 세가 중 한 가지만 가능, or느낌
        }
        이러한 인터페이스를 따르는 값들의 리스트임.
        */}

        {/*그리고 그 리스트의 요소들을 차례 차례 뽐아와 ToDo 컴포넌트에 전달 */}
        {/*ToDo는 실질적으로 화면에 보이는 li태그 toDo jsx를 리턴*/}
        {/*실질적으로 화면에 보이는 li toDo jsx가 배열화 되어 ul요소에 들어가 화면에 보임*/}
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;