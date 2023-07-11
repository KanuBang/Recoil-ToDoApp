1. atoms
    1) category 상태
        => 현재 선택된 카테고리 상태를 다룸
    2) 모든 task 상태
        => 카테고리 구분 없이 모든 task를 다룸
    3) categoty 별 task 상태
        => 모든 task와 현재 카테고리를 get으로 가져와 현재 카테고리에 해당되는 task를 만들어 냄

2. ToDoList
    기능: 
        1) ToDoList의 전반적인 구조(카테고리 선택, 카테고리 별 task 생성, 카테고리 별 task 리스트)
           를 렌더링 함
        2) 카테고리를 선택하면 그 카테고리 해당하는 task를 선택할 수 있고, 
           그 카테고리에 있는 task를 볼 수 있다.

    연결된 atoms:
        1) categoty, category 별 task
    
    로직:
        1) select 에서 카테고리를 바꿈
        2) onInput 함수가 카테고리를 상태를 변경시킴
        3) 리렌더링
        4) toDos는 현재 선택된 카테고리에 해당되는 task를 가지게 된다
        5) 그리고 그것이 렌더링된다

3. CreateToDo
    기능:
        1) 사용자가 입력한 값과 현재 카테고리를 반영하여 task를 생성한 후 toDoState에 저장
    연결된 atoms:
        1) categoryState, toDoState
    로직:
        1) 현재 선택된 카테고리 값을 가져오고 toDoState를 업데이트할 수 있는 setter을 가져옴
        2) 사용자가 폼에다가 task를 입력하고 제출을 하면 handleValid 실행
        3) 현재 선택된 카테고리를 반영한 task와 그 전의 task를 합친 값을 return 하여 toDoState를 업데이트

3. ToDo
    기능:
        1) 화면에 나타날 각각의 task를 li로 담아서 리턴하는 역할을 함
        2) task들은 카테고리를 바꿀 수 있는 버튼을 가지고 있음
    연결된 atoms:
        1) toDoState
    로직:
        1) toDoState를 바꿀 수 있는 setter을 가져옴
        2) 전달 받은 task의 카테고리가 DOING | TO_DO | DONE 중에서
           어떤 값과 같다면(다르지 않다면) task는 나머지 카테고리를 전활 될 수 있는 버튼을 가진다
           (만약, TO_DO 카테고리 task라면 DOING, DONE 으로 전활될 수 있는 버튼을 가진다)
        3) TO_DO 카테고리인 task를 DOING으로 전환시키기 위해 DOING 버튼을 클릭
        4) onClick 실행
        5) 그 버튼의 이름(name(DOING))을 가져옴
        6) 그 현재 카테고리가 바뀐 task를 toDoState의 index를 찾고
        7) 그 index 기준으로 앞과 뒤를 슬라이싱함
        8) 그리고 카테고리를 name으로 업데이트 시킨 것과 합침
        9) setter을 이용해 toDoSate를 업데이트

    