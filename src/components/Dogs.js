import  {React, useState, useEffect } from 'react';
import axios from 'axios';

function DogUsers() {
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



  return (
    <div className="App">

          <img src={dogs.message} alt="" style={{borderRadius: "10px", width: "300pt"}}></img>
          <h2>{name.name}</h2>
          <h3>{hobby.activity}</h3>

    </div>
  );
}

export default DogUsers;
