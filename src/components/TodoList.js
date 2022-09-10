import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoStateContext } from '../pages/Main';
// Main.js에서 TodoStateContext를 불러와야한다
import TodoItem from './TodoItem';

const TodoList = () => {
  const todolist = useContext(TodoStateContext);
  // useContext를 사용, data를 전달받는다
  return (
    <TodoListBox>
      <div>
        {todolist.map(
          (it) => (
            <TodoItem key={it.id} {...it} />
          ),
          // TodoItem에 따로 onRemove 등의 함수를 전달하지 않아도 됨.
        )}
      </div>
    </TodoListBox>
  );
};

TodoList.defaultProps = {
  todolist: [],
};

export default React.memo(TodoList);

const TodoListBox = styled.div`
  height: 59vh;
  margin: 0;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`