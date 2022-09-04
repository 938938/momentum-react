import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MemoDispatchContext } from '../App';
import MemoButton from './MemoButton';

const MemoForm = ({ isEdit, originData }) => {
  const textRef = useRef();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const { onCreate, onEdit } = useContext(MemoDispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length < 1) {
      textRef.current.focus();
      return;
    }
    if (!isEdit) {
      onCreate(text);
    } else {
      onEdit(originData.id, originData.date, text);
    }
    navigate('/memo', { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setText(originData.text);
    }
  }, [isEdit, originData]);

  useEffect(() => {
    textRef.current.focus();
  }, []);
  // 수정을 시작했을 때 포커스 효과 주기

  return (
    <MemoFormBox>
      <MemoButton
        text1={'저장'}
        type1={'positive'}
        onClick1={handleSubmit}
        text2={'취소'}
        type2={'negative'}
        onClick2={() => navigate('/memo')}
      />
      <MemoFormTextArea
        placeholder="메모를 작성해주세요"
        ref={textRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </MemoFormBox>
  );
};

export default MemoForm;

const MemoFormBox = styled.form`
  height: 100vh;
`
const MemoFormTextArea = styled.textarea`
  width: 95%;
  height: 70%;
  padding: 20px;
  resize: vertical;
  box-sizing: border-box;
  border: 4px double rgb(190, 210, 190);
  background-color: rgb(250, 250, 250);
  margin-top: 20px;
  outline: none;
  border-radius: 10px;
`