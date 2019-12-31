import React , { useState } from 'react';
import './App.css';
import Menu from './components/SideBar';
import Header from './components/Header';
import Information from './components/Information';
import Footer from './components/Footer'
import Header2 from './components/Header2';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
       <Menu pageWrapId={"page-wrap"} outerContainer={"App"} />
      <div className="page-wrap">
      <Header/>  
      <Information/>
      <Footer/> 
  

      </div>
      
    </div>
  );
}

export default App;
