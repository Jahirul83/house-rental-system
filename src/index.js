import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import UserContext from './components/contexts/UserContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContext><App /></UserContext>
        </BrowserRouter>
    </React.StrictMode>

);

