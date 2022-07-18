import React, { useContext } from 'react';
import { MemoStateContext } from '../App';
import MemoItem from './MemoItem';

const MemoList = () => {
  const memolist = useContext(MemoStateContext);

  return (
    <div className="MemoList">
      {memolist.map((it) => (
        <MemoItem key={it.id} {...it} />
      ))}
    </div>
  );
};

export default MemoList;
