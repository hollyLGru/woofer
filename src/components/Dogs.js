import * as React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Buttons from "./Buttons"


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
    <div className="Dogs">

          <img src={dogs.message} alt="" style={{
            borderRadius: "10px", 
            objectFit: "cover", 
            width: "300pt", 
            height: "300pt", 
            border: "1px solid lightgrey"
            }}></img>
          <h2>{name.name}</h2>
          <h3>{hobby.activity}</h3>

      <Buttons/>
    </div>
  );
}

export default DogUsers;
