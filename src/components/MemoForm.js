import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MemoDispatchContext } from "../App";
import MemoButton from "./MemoButton";

const MemoForm = () => {
  const textRef = useRef();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const {onCreate} = useContext(MemoDispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.length < 1){
      textRef.current.focus();
      return;
    }
    onCreate(text);
    navigate('/memo',{replace:true})
  }

  return(
    <form className="MemoForm">
      <MemoButton
        text1={"취소"}
        text2={"저장"}
        type1={"negative"}
        type2={"positive"}
        onClick1={()=>navigate('/memo')}
        onClick2={handleSubmit}
      />
      <textarea
        placeholder="메모를 작성해주세요"
        ref={textRef}
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
    </form>
  )
}

export default MemoForm;