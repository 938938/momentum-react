import React, { useState } from 'react'

export default function TodoForm(props) {

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(value)
    setValue("")
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
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