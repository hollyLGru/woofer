import  React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter} from "react-router-dom"
// npm i --force react-router-dom for react router 
import Router from './Router'

function App() {


  return (
    <div className="App" style={{width: "400pt", display:"flex", justifyContent:"center", margin: "auto" }}>
        <div>

          <BrowserRouter>
          <Header/>
          <Router></Router>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
