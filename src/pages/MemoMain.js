import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MemoList from "../components/MemoList";

const MemoMain = () => {

  const navigate = useNavigate();
  useEffect(()=>{
    const titleElement = document.getElementsByTagName("title")[0];
    const headerName = document.querySelector(".headerName");
    titleElement.innerHTML = `Memo!`;
    headerName.innerHTML = 'Memo!';
  })
  return(
    <div className="MemoMain">
      <div className="MemoNewButton">
        <button
          onClick={()=>{
            navigate('/new')
          }}
        >+</button>
      </div>
      <MemoList />
    </div>
  )
}

export default MemoMain;