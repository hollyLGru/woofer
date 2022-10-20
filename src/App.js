import  React from 'react';
import './App.css';
import Header from './components/Header'
import DogUsers from './components/Dogs'
import {BrowserRouter, Link} from "react-router-dom"
// npm i --force react-router-dom for react router 
import Router from './Router'

function App() {


  return (
    <div className="App" style={{width: "400pt", display:"flex", justifyContent:"center", margin: "auto" }}>
        <div>
          <Header/>
          <DogUsers/>
          <BrowserRouter>

          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
