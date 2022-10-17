import  {React, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [dogs , updateDogs] = useState([]);


  useEffect(() => {
    axios.get(`https://dog.ceo/api/breeds/image/random`)
    .then (res => {
        updateDogs(res.data)
    })
  })

  return (
    <div className="App">
      <img src={dogs.message} alt=""></img>
    </div>
  );
}

export default App;
