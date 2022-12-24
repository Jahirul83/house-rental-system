import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import PrivateRoutes from './components/PrivateRoutes';


function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Services' element={<PrivateRoutes><Services/></PrivateRoutes>}/>
        <Route path='/Contact' element={<Contact/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
