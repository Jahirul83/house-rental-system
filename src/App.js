import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import PrivateRoutes from './components/PrivateRoutes';
import Services from './pages/Services';
import AddRent from './pages/AddRent/AddRent';


function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Services' element={<PrivateRoutes><Services></Services></PrivateRoutes>}/>
        <Route path='/Contact' element={<PrivateRoutes><Contact/></PrivateRoutes>}/>
        <Route path='/addrent' element={<AddRent/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
