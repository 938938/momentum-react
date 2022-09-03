import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
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
    return <div>Now Loading...</div>;
  } else {
    return (
      <div>
        <MemoButton
          text1={'수정'}
          type1={'positive'}
          onClick1={() => navigate(`/edit/${data.id}`)}
          text2={'삭제'}
          type2={'negative'}
          onClick2={handleRemove}
        />
        <MemoPageArticle>
          <MemoPageSection>{data.text}</MemoPageSection>
        </MemoPageArticle>
      </div>
    );
  }
};

export default MemoPage;

const MemoPageArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const MemoPageSection = styled.section`
  width: 95%;
  height: 70%;
  padding: 20px;
  box-sizing: border-box;
  border: 4px double rgb(190, 210, 190);
  background-color: rgb(250, 250, 250);
  margin-top: 20px;
  border-radius: 10px;
  text-align: left;
`