import React, { useContext } from 'react'
import { TodoStateContext } from '../pages/Main';
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todolist = useContext(TodoStateContext);
  // useContext를 사용, TodoItem에 따로 onRemove 등의 함수를 전달하지 않아도 됨.
  return(
    <div className="TodoList">
      <div>
        {todolist.map((it)=>
          <TodoItem
            key = {it.id}
            {...it}
          />
        )}
      </div>
    </div>
  )
}

TodoList.defaultProps={
  todolist:[]
}

export default React.memo(TodoList);