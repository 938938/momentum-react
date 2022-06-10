import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemoStateContext } from "../App";
import MemoForm from "../components/MemoForm";

const MemoEdit = () => {

  const [originData,setOriginData] = useState();

  const navigate = useNavigate();
  const {id} = useParams();
  const memolist = useContext(MemoStateContext);

  useEffect(()=>{
    if(memolist.length >=1){
      const targetMemo = memolist.find((it)=>parseInt(it.id) === parseInt(id));
      if(targetMemo){
        setOriginData(targetMemo);
      } else {
        navigate('/memo',{replace:true})
      }
    }
  },[id,memolist])

  return(
    <div className="MemoEdit">
      {originData && <MemoForm isEdit={true} originData={originData}/>}
    </div>
  )
}

export default MemoEdit;