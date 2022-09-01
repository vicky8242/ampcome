import React from "react";
import Menu from './components/Menu';
import Appointment from './components/Appointment';
import Dashboard from './components/Dashboard';
import './Style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Menu /> */}
        <Routes>

           <Route path="/" element={<Menu />}/>
           <Route path="/dashboard" element={<Dashboard />}/>
           <Route path="/appointment" element={<Appointment />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
