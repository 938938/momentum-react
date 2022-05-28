import React, { useContext, useState } from 'react'
import { TodoDispatchContext } from '../pages/Main';

const TodoForm = () => {
  const {onCreate} = useContext(TodoDispatchContext);
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    if(value < 1){
      return;
    } // 내용이 입력되지 않았을 경우 onCreate로 전달하지 않고 끝내기
    onCreate(value);
    // onCreate로 value를 전달해서 item으로 만들기
    setValue("")
    // 입력창 초기화
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        className='TodoInput'
        placeholder='할 일을 입력해주세요'
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
      />
      <button
        className='TodoButton'
        type='submit'
      >
        추가
      </button>
    </form>
  )
}

export default React.memo(TodoForm);