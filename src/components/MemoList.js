import React, { useContext } from 'react';
import styled from 'styled-components';
import { MemoStateContext } from '../App';
import MemoItem from './MemoItem';

const MemoList = () => {
  const memolist = useContext(MemoStateContext);

  return (
    <MemoListBox>
      {memolist.map((it) => (
        <MemoItem key={it.id} {...it} />
      ))}
    </MemoListBox>
  );
};

export default MemoList;

const MemoListBox = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  /* flex-flow: wrap; */
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: 70vh;
  &::-webkit-scrollbar {
    display: none;
  }
`