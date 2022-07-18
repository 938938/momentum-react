import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MemoDispatchContext, MemoStateContext } from '../App';
import MemoButton from '../components/MemoButton';

const MemoPage = () => {
  const { id } = useParams();
  const memoList = useContext(MemoStateContext);
  const { onRemove } = useContext(MemoDispatchContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (memoList.length >= 1) {
      const targetMemo = memoList.find((it) => parseInt(it.id) === parseInt(id));
      if (targetMemo) {
        setData(targetMemo);
      } else {
        navigate('/memo', { replace: true });
      }
    }
  });

  const handleRemove = () => {
    onRemove(data.id);
    navigate('/memo', { replace: true });
  };

  if (!data) {
    return <div className="MemoPage">Now Loading...</div>;
  } else {
    return (
      <div className="MemoPage">
        <MemoButton
          text1={'수정'}
          type1={'positive'}
          onClick1={() => navigate(`/edit/${data.id}`)}
          text2={'삭제'}
          type2={'negative'}
          onClick2={handleRemove}
        />
        <article>
          <section>{data.text}</section>
        </article>
      </div>
    );
  }
};

export default MemoPage;
