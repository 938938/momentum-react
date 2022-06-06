const MemoButton = ({text, type, onClick}) => {
  return(
    <button
      className={"MemoButton"}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default MemoButton;