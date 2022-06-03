import MemoItem from "./MemoItem";

const MemoBox = ({data}) => {
  return(
    <div className="MemoBox">
      {data.map((it)=>
        <MemoItem
          key={it.id}
          {...it}
        />
      )}
    </div>
  )
}

MemoBox.defaultProps = {
  data:[]
}

export default MemoBox;