import Header from './container/Header'
import Footer from './container/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Loading from './components/loader/Loading';
import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css'

function App() { 
  return (
    <>
      <Header/>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route/>
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
