import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import React from 'react';
import Header from './Layout/User/Header';
import Home from './Pages/User/Home';
function App() {
  return (
    <React.Fragment>
      <Header />
    <Routes>
     <Route path='/' element={<Home />} />
    </Routes>
    </React.Fragment>
 
  );
}

export default App;
