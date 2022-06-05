import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import EditMemo from './pages/EditMemo';
import Main from './pages/Main';
import MemoMain from './pages/MemoMain';
import NewMemo from './pages/NewMemo';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/memo' element={<MemoMain />} />
          <Route path='/new' element={<NewMemo />} />
          <Route path='/edit' element={<EditMemo />} />
        </Routes>
        {/* 페이지 라우팅 구현 */}
      </BrowserRouter>
    </div>
  );
}

export default App;