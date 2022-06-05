const MemoEdit = () => {
  return(
    <form className="MemoEdit">
      <textarea
        placeholder="메모를 작성/수정하는 페이지입니다"
      />
      <div>
        <button>입력</button>
        <button>취소</button>
      </div>
    </form>
  )
}

export default MemoEdit;