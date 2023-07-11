import { useRecoilState, useRecoilValue } from "recoil";
import {Categories, toDoSelector, categoryState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
/*
todolist의 가장 큰 틀
1. DONE, DOING, TO_DO => 카테고리 선택
2. CREATE TO DO
3. CATEGORY 별 TASKS 보여주기
*/

/*
atoms.tsx 
1. 카테고리 상태 
2. task 상태
3. 카테고리 별 task 상태
*/


function ToDoList() {
  const toDos = useRecoilValue(toDoSelector)
  const [category, setCategory] = useRecoilState(categoryState)
  const onInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
  }
  
  /*
    atoms.tsx
    export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
       const category = get(categoryState)
       return toDos.filter((toDo) => toDo.category === category)
      }
    })
  */

  /*
    1. 초기화면
      1) toDos는 비어있고 categoryState의 default는 TO_DO 임
      2) toDos = empty array이고 category = TO_DO임
      3) 화면에는 option이 TO_DO이고 TO_DO 배열(빈 배열)이 보임
    
    2. 초기화면 TO_DO에 인풋 추가
      1) CreateTODO가 이 부분을 담당 => CreateToDo 참고
    
    3. TO_DO에 인풋이 추가된 상황
      0) 셀렉터가 현재 카테고리(TO_DO)와 일치하는 task를 toDos에 리턴
      1) toDos는 카테고리가 TO_DO task로 업데이트. categoryState는 여전히 TO_DO
      3) TO_DO 카테고리로 업데이트된 toDos를 화면에 뿌림 ToDO 컴포넌트를 이용하여

    4. ToDo가 카테고리가 To_Do일때 알맞는 li형식을 차례로 리턴. 그 후 ToDoList가 li를 화면에 렌더링

    5. TO_DO 중 하나가 DONE으로 바뀐다면 => ToDo 참고

    6. 결좍적으로 toDoState에는 이제 category가 done인 task가 있음
      1) atoms.tsx에서 셀럭터를 이용해 현재 카테고리(To_DO)와 맞는 값을 리턴하여 toDos에 저장할 때
      아까 DONE으로 업데이트된 task는 보이지 않음
    
    7. 반면, category를 DONE으로 바꾼다면 onInput이 실행되어 현재 category state가 DONE으로 바뀜
      1) 그리고 이제는 DONE인 task가 출력됨

    
  */
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
      <h2>HG</h2>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo}/>
      ))}
     
    </div>
  );
}

export default ToDoList;