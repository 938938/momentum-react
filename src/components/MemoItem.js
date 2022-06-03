

const MemoItem = ({date, text}) => {
  return(
    <div className="MemoItem">
      <div className="MemoDate">{new Date(date).toLocaleDateString()}</div>
      <div className="MemoText">{text}</div>
    </div>
  )
}

export default MemoItem;