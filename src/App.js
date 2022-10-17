import  {React, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [dogs , updateDogs] = useState([]);
  const [name, setName] = useState([]);
  const [hobby, setHobby] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const dogPicturesAPI = await axios(`https://dog.ceo/api/breeds/image/random`);
      const randomNameAPI = await axios(`https://random-data-api.com/api/name/random_name`);
      const activityAPI = await axios(`https://www.boredapi.com/api/activity`);

      updateDogs(dogPicturesAPI.data);
      setName(randomNameAPI.data);
      setHobby(activityAPI.data)
    };

    fetchData()

  }, []);



  useEffect(() => {
    axios.get(`https://dog.ceo/api/breeds/image/random/`)
    .then (res => {
        updateDogs(res.data)
    })
  }, [],
    )

  return (
    <div className="App">

          <img src={dogs.message} alt="" style={{width: "300pt"}}></img>
          <h1>{name.name}</h1>
          <h2>{hobby.activity}</h2>

    </div>
  );
}
//https://www.youtube.com/watch?v=wLGM04oi_wE lets code along to this video to make woofer
export default App;
