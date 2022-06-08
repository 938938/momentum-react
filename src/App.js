import React, { useMemo, useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import MemoEdit from './pages/MemoEdit';
import MemoMain from './pages/MemoMain';
import MemoNew from './pages/MemoNew';
import MemoPage from './pages/MemoPage';

const reducer = (state,action)=>{
  let newState = [];
  switch(action.type){
    case 'INIT':{
      return action.data
    }
    case 'CREATE':{
      newState = [action.data, ...state]
      break;
    }
    case 'REMOVE':{
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case 'EDIT':{
      newState = state.map((it)=>it.id === action.data.id? {...action.data} : it)
      break;
    }
    default:
      return state;
  }
  return newState;
}

export const MemoStateContext = React.createContext();
export const MemoDispatchContext = React.createContext();

function App() {
  
  const [data,dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = (date, text)=>{
    dispatch({type:"CREATE", data:{
      id: dataId.current,
      date:new Date(date).getTime(),
      text
    }})
    dataId.current++;
  }

  const onRemove = (targetId) => {
    dispatch({type:"REMOVE", targetId})
  }

  const onEdit = (targetId, date, text) => {
    dispatch({
      type:"EDIT",
      data:{
        id:targetId,
        date:new Date(date).getTime(),
        text
      }
    })
  }

  const memoDispatches = useMemo(()=>{
    return {onCreate, onRemove, onEdit}
  },[])

  return (
    <div className='App'>
      <MemoStateContext.Provider value={data}>
        <MemoDispatchContext.Provider value={memoDispatches}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/memo' element={<MemoMain />} />
              <Route path='/new' element={<MemoNew />} />
              <Route path='/edit' element={<MemoEdit />} />
              <Route path='/page/:id' element={<MemoPage />} />
            </Routes>
            {/* 페이지 라우팅 구현 */}
          </BrowserRouter>
        </MemoDispatchContext.Provider>
      </MemoStateContext.Provider>
    </div>
  );
}

export default App;