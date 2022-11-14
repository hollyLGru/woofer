import  React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter} from "react-router-dom"
import Router from './Router'

function App() {


  return (
    <div className="App" style={{borderRadius: "10px", width: "400pt", display:"flex", justifyContent:"center", margin: "auto"}}>
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
