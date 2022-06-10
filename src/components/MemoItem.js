import { useContext } from "react";
import { MemoDispatchContext } from "../App";

const MemoItem = ({
  text, date
}) => {
  const {onRemove} = useContext(MemoDispatchContext);
  const handleButton = () => {
    if(!it.delete) return it.delete;
    onRemove();
  }
  return(
    <div className="MemoItem">
      <div className="memodate">{new Date(date).toLocaleDateString()}</div>
      <div className="memotext">{text.slice(0, 25)}</div>
      <button
        onClick={handleButton}
      >×</button>
    </div>
  )
}

export default MemoItem;