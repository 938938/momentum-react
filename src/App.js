import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import MemoEdit from './pages/MemoEdit';
import MemoMain from './pages/MemoMain';
import MemoNew from './pages/MemoNew';
import MemoPage from './pages/MemoPage';

function App() {
  
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;