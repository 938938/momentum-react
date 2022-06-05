import { useNavigate } from "react-router-dom";

const MemoAdd = () => {
  const navigate = useNavigate();
  return(
    <div className="MemoAdd">
      <button
        onClick={()=>{
          navigate('/new')
        }}
      >+</button>
    </div>
  )
}

export default MemoAdd;