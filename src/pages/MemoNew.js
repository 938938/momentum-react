import MemoButton from "../components/MemoButton";
import MemoForm from "../components/MemoForm";

const MemoNew = () => {
  return(
    <div className="MemoNew">
      <MemoButton
        text1={"저장"}
        text2={"취소"}
        type1={"positive"}
        type2={"negative"}
      />
      <MemoForm />
    </div>
  )
}

export default MemoNew;