import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
