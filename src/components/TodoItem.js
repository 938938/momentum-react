import React from 'react'
import {AiOutlineStar, AiFillDelete} from "react-icons/ai"
import {AiFillCheckCircle} from 'react-icons/ai'

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo,importantTodo } = props

  return (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'} style={todo.important ? { background: "orange" } : {}}>
      <AiOutlineStar
        className='todo-icon'
        onClick={()=>importantTodo(todo.id)}
      />
      <div
        className='text'
        onClick={()=>completeTodo(todo.id)}
      >
        {props.todo.text}
      </div>
      <AiFillDelete
        className='todo-icon'
        onClick={()=>removeTodo(todo.id)}
        style={{marginRight:5}}
      />
    </div>
  )
}
