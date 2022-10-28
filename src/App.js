import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer/>
    </div>
  );
}

export default App;
