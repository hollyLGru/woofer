

import  React from 'react';
import './App.css';
import Header from './components/Header'
import DogUsers from './components/Dogs'

function App() {


  return (
    <div className="App" style={{width: "400pt", display:"flex", justifyContent:"center", margin: "auto" }}>
        <div>
          {/* header */}
          <Header/>
          {/* user cards */}
          <DogUsers/>
          {/* buttons */}

          {/* chat screen */}
        </div>
    </div>
  );
}

export default App;
