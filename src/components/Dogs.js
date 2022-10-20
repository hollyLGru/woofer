import * as React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
// import TinderCard from 'react-tinder-card'

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

  // const onSwipe = (direction) => {
  //   console.log('You swiped: ' + direction)
  // }
  
  // const onCardLeftScreen = (myIdentifier) => {
  //   console.log(myIdentifier + ' left the screen')
  // }



  return (
    <div className="Dogs">

          <img src={dogs.message} alt="" style={{borderRadius: "10px", width: "300pt"}}></img>
          <h2>{name.name}</h2>
          <h3>{hobby.activity}</h3>

          {/* <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard> */}

    </div>
  );
}

export default DogUsers;
