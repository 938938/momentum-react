# TodoList - React.ver

[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지](https://inf.run/2XT4) 강의를 참고로 하여 만들어본 TodoList 입니다.<br>
[TodoList](https://938-todo-list.web.app)를 통해 직접 사용해보실 수 있습니다.
<br>
자세한 제작 기록은 블로그의 [React 로 Todo List 만들기](https://fdaytday.tistory.com/category/Project) 게시물에서 확인하실 수 있습니다.

<br>

---

<br>

![ver1.5](https://user-images.githubusercontent.com/92746200/170853311-2ae8c571-f11f-441b-bce3-0212e2755952.png)

## 업데이트 기록

- ver1 <br>
  기본적인 TodoList의 기능 구현. 할일 입력, 제거, 완료한 할일 표시, 중요한 할일 표시를 할 수 있습니다.
- ver1.1 <br>
  시계 기능 구현.
- ver1.2 <br>
  React.memo, useCallback, useReducer을 사용하여 최적화 진행.
- ver1.3 <br>
  Context를 사용하여 최적화를 진행.
- ver1.4 <br>
  localStorage를 사용, 데이터 저장이 가능해짐.
- ver1.5 <br>
  가독성 고려 완료한 할 일을 아래로, 중요한 할 일은 위로 배치되도록 변경.<br>
  완료한 할 일도 남은 할 일에 포함되는 오류 수정.
- ver1.6 <br>
  CSS 수정(font-family 변경).
  배포 시작.

## 앞으로 업데이트 할 내용(예정, 순서 무관)

- ~~시계 기능 추가~~
- ~~localState를 이용한 데이터 저장~~
- ~~완료한 할일을 할일리스트 아래로 이동하는 기능~~
- ~~중요한 할일을 할일리스트 위로 이동~~
- 중요한 할일을 체크했을 경우, 아이콘을 색칠된 별로 변경
- 가장 처음 접속했을 경우, 안내 페이지 띄우기?
- 상단에 TodoList 페이지 버튼 추가하고 옆에 메모장 버튼 추가.
- 메모장 페이지를 구현.
