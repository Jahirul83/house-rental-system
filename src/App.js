import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from "./Footer";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
