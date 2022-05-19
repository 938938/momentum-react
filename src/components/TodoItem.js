import React from 'react'
import {AiOutlineStar, AiFillDelete} from "react-icons/ai"
import {AiFillCheckCircle} from 'react-icons/ai'

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo,importantTodo } = props

  return (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'} style={todo.important ? { background: "orange" } : {}}>
      <AiOutlineStar
        className='iconsContainer'
        onClick={()=>importantTodo(todo.id)}
      />
      {props.todo.text}
      <div className='iconsContainer'>
        <AiFillCheckCircle
          onClick={() => completeTodo(todo.id)}
        />
        <AiFillDelete
          onClick={()=>removeTodo(todo.id)}
          style={{marginRight:5}}
        />
      </div>
    </div>
  )
}
