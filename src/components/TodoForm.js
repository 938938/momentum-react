import React, { useState } from 'react'

export default function TodoForm(props) {

  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        placeholder='할 일을 입력해주세요'
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
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