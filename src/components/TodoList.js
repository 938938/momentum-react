import React, { useContext } from 'react'
import { TodoStateContext } from '../pages/Main';
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todolist = useContext(TodoStateContext);
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