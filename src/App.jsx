import Header from './container/Header'
import Footer from './container/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { Routes, Route } from 'react-router-dom';
import './app.css'

function App() {
  
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
