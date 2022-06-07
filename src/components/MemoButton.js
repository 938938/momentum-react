const MemoButton = ({text1, text2, type1, type2, onClick}) => {

  return(
    <div className="MemoButton">
      <button
        className={["MemoButton_left", `MemoButton_${type1}`].join(" ")}
        onClick={onClick}
      >
        {text1}
      </button>
      <button
        className={["MemoButton_right", `MemoButton_${type2}`].join(" ")}
        onClick={onClick}
      >
        {text2}
      </button>
    </div>
  )
}

MemoButton.defaultProps = {
  type:"default"
}

export default MemoButton;