import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import MemoMain from './pages/MemoMain';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/memo' element={<MemoMain />} />
        </Routes>
        {/* 페이지 라우팅 구현 */}
      </BrowserRouter>
    </div>
  );
}

export default App;