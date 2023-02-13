// import { Router } from 'react-router-dom';

import React from "react"
import './App.css';
import Header from './common/header/Header';
// import {Link} from 'react-router-dom'
import { BrowserRouter as Router,  Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Product from "./components/others/Product";
import ProductList from "./pages/ProductList";
import Product1 from "./pages/Product1";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/ProductList' element={<ProductList/>}/>
          <Route path='/Product1' element={<Product1/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
