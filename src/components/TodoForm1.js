import React, { useRef, useState } from 'react'

export default function TodoForm(props) {

  const todoInput = useRef();

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    if(value <1){
      todoInput.current.focus();
      return;
    }
    props.addTodo(value)
    setValue("")
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        ref={todoInput}
        className='todo-input'
        placeholder='할 일을 입력해주세요'
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
      />
      <button
        className='todo-button'
        type='submit'
      >
        추가
      </button>
    </form>
  )
}