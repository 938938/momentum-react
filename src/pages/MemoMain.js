import { useEffect } from "react";
import MemoHeader from "../components/MemoHeader";
import MemoInput from "../components/MemoInput";

const MemoMain = () => {
  useEffect(()=>{
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Memo!`;
  })
  return(
    <div className="MemoMain">
      ** 메모장 페이지입니다. (구현중) **
      <MemoHeader />
      <MemoInput />
    </div>
  )
}

export default MemoMain;