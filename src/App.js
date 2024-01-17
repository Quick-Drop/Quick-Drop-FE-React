import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App; //현 컴포넌트를 다른 곳에서 불러와 사용할 수 있도록 내보내기를 해줌.
