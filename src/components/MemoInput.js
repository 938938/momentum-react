import { useState } from "react";

const MemoInput = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    console.log(value)
  }
  return(
    <div className="MemoInput">
      {/* <textarea
        placeholder="내용을 입력해주세요"
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
      /> */}
      <button
        onClick={handleClick}
      >+</button>
    </div>
  )
}

export default MemoInput;