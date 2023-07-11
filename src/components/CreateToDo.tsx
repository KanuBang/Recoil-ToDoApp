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


    // 여기서 toDo 인자는 input 입력 값을 handleSubmit으로부터 전달 받음
    // toDo 리스트를 setter 업데이트
    const handleValid = ({toDo}: IForm) => {
        setToDos((oldToDos) => [
            {text: toDo, id:Date.now(), category:category},
            ...oldToDos
        ])

        setValue("toDo", "")
    }

    return (
        <form onSubmit={handleSubmit(handleValid)}>
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
