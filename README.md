#### 2월 프리온보딩 챌린지 과제 입니다.

- [Documentation 바로가기](https://taesung1993.github.io/wanted-pre-onboarding-challenge-fe-2/)

```(javascript)
const {
  createTodo,
  getTodo,
  getTodos,
  clearTodos,
  deleteTodo,
  updateTodo,
} = require("./todos");

// 1. 할 일 추가
createTodo("핸드폰 구입");
createTodo("청소하기");


// 2. 전체 할 일 지우기
console.log(getTodos());
/*
  [
    {
      id: 1,
      content: '핸드폰 구입',
      isComplete: false,
      category: '',
      tags: []
    },
    { id: 2, content: '청소하기', isComplete: false, category: '', tags: [] }
  ]
*/


// 3. 특정 할 일 조회하기
console.log(getTodo(1));
/* { id: 1, content: '핸드폰 구입', isComplete: false, category: '', tags: [] } */


// 4. 특정 할 일 수정하기
updateTodo(1, { content: "사전과제 제출" });
console.log(getTodos());
/*
  [
    {
      id: 1,
      content: '사전과제 제출',
      isComplete: false,
      category: '',
      tags: []
    },
    { id: 2, content: '청소하기', isComplete: false, category: '', tags: [] }
  ]
*/

// 5. 특정 할 일 지우기
deleteTodo(1);
console.log(getTodos());
/*
  [{ id: 2, content: '청소하기', isComplete: false, category: '', tags: [] }]
*/


// 6. 전체 지우기
clearTodos();
console.log(getTodos());
/* [] */
```
