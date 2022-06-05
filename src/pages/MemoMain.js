import { useEffect } from "react";
import MemoBox from "../components/MemoBox";
import MemoEdit from "../components/MemoEdit";
import MemoInput from "../components/MemoInput";
// import MemoHeader from "../components/MemoHeader";

const dummy = [
  {
    date:new Date().getTime(),
    id:1,
    text:"첫번째 메모"
  },
  {
    date:new Date().getTime(),
    id:2,
    text:"두번째 메모"
  },
  {
    date:new Date().getTime(),
    id:3,
    text:"세번째 메모"
  },
  {
    date:new Date().getTime(),
    id:4,
    text:"네번째 메모"
  },
  {
    date:new Date().getTime(),
    id:5,
    text:"다섯번째 메모"
  },
]

const MemoMain = () => {
  useEffect(()=>{
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Memo!`;
  })
  return(
    <div className="MemoMain">
      ** 메모장 페이지입니다. (구현중) **
      {/* <MemoHeader /> */}
      <MemoInput />
      <MemoEdit />
      <MemoBox data={dummy}/>
    </div>
  )
}

export default MemoMain;