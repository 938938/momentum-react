import { useParams } from "react-router-dom";

const Memo = () => {
  const {id} = useParams();
  return(
    <div>
      <h1>메모</h1>
      <p>메모 페이지입니다</p>
    </div>
  )
}

export default Memo;