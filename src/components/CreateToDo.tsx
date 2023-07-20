import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoState} from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState)
    const category = useRecoilValue(categoryState)
    const {register, handleSubmit, setValue} = useForm<IForm>()

    /*
        1. 초기화면 TO_DO에서 인풋을 넣는 상황
            1) toDoSate를 update 시키는 setter와 현재 category 값(TO_DO)를 가져옴
            2) 인풋에 입력 후 제출
            3) handleVaild 실행 후 setToDos로 ToDos 업데이트
            4) ToDos에 저장되는 task의 category는 현재 category의 state 값
    */
   
    const handleValid = ({toDo}: IForm) => {
        setToDos((oldToDos) => [
            {text: toDo, id:Date.now(), category:category},
            ...oldToDos
        ])

        setValue("toDo", "")
    }

    return (
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo", {required: "Please write a To Do",})}
                placeholder="Write a to do"
            />
            <button>
                ADD
            </button>
        </form>
    )
}
  
export default CreateToDo;
