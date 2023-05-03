import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Component/header/Header';
import { SideBar } from './Component/sidebar/SideBar';
import { Home } from './Component/home/Home';
import { ViewUsers } from './Component/Users/ViewUsers';

function App() {
  return <>
    <SideBar />
    <div className='content'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewuser" element={<ViewUsers/>} />
      </Routes>
    </div>
  </>
}

export default App;
