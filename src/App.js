import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Memo from './pages/Memo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>늘 나타나는 글</h2>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/calendar' element={<Calendar />}/>
          <Route path = '/memo' element={<Memo />}/>
          {/* <Route path = '/memo/:id' element={<Memo />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;