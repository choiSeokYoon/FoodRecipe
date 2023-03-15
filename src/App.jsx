import Header from './container/Header'
import Footer from './container/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Loading from './components/loader/Loading';
import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Diet from './pages/Diet';
import Register from './pages/Register';
import Login from './pages/Login';
import WishList from './pages/WishList';
import "./app.css";


function App() { 
  return (
    <>
      <Header/>
      <Suspense fallback={<Loading/>} >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/diet' element={<Diet/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/like' element={<WishList/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
