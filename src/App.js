import React, { useState } from 'react';
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
import ViewDetails from './pages/viewDetails/viewDetails';
import FAQ from './pages/FAQ/FAQ';
import Review from './pages/Review/Review';




function App() {
  const [viewD, setViewD] = useState();

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage setData={setViewD} />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Services' element={<Services setData={setViewD}></Services>} />
        <Route path='/Contact' element={<PrivateRoutes><Contact /></PrivateRoutes>} />
        <Route path='/ViewDetails' element={<ViewDetails viewData={viewD}></ViewDetails>} />
        <Route path='/addrent' element={<AddRent />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/review' element={<Review />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
