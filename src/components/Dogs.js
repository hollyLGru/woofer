import * as React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayIcon from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';

function DogUsers() {
  const [dogs , updateDogs] = useState([]);
  const [name, setName] = useState([]);
  const [hobby, setHobby] = useState([])
  const [isHidden, setIsHidden] = useState(true);

  const [likedDogs, setLikedDogs] = useState({name: '', image: '', hobby: ''});
  // const [dislikedDogs, setDislikedDogs] = useState([]);
  // const [superLikedDogs, setSuperLikedDogs] = useState([]);
  console.log(likedDogs)

  // create a script with event listener, save liked dogs into local storage, 


  let gender = ["Male", "Female"];
  let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15]

  
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

  function likeThisDog() {
    console.log(hobby.activity, dogs.message, name.name)
    // creat object store to local storage fsds
  };

  return (
    <div className="Dogs" style={{width: "300pt", paddingBottom: "5%"}}>
          <img src={dogs.message} alt="" style={{
            borderRadius: "10px", 
            objectFit: "cover", 
            width: "300pt", 
            height: "300pt", 
            border: "1px solid lightgrey",
            boxShadow: "0px 18px 53px 0px grey",
            marginBottom: "5%"
            }}/>

          <h2 onClick={() => setIsHidden(!isHidden)}>{name.name} </h2>
          {isHidden ? "" : 
          <div style={{color: "grey"}}>
            <h3> {gender[Math.floor(Math.random() * gender.length)]}, {age[Math.floor(Math.random() * age.length)]}</h3>
            <br></br>
            <h3>I would like to...  "{hobby.activity} with you"</h3>
          </div>} 
          

        <div style={{ display: "flex", justifyContent: "center", width: "300pt", marginTop: "5%"}}>
          <ReplayIcon style={{color: "#FDCD5F", margin: "-1", fontSize: "270%", borderRadius: "100%", border: "8px solid #F4F4F4"}}/>
          <ClearIcon style={{margin: "-1", color: "#FD6B6B", fontSize: "500%", borderRadius: "100%", border: "8px solid #F4F4F4"}} />
          <FavoriteIcon style={{margin: "-1", color: "#4FCC94", fontSize: "500%", borderRadius: "100%", border: "8px solid #F4F4F4"}}/>
          <StarIcon onClick={likeThisDog()} style={{borderRadius: "100%", border: "8px solid #F4F4F4", color: "#2EB3C9", margin: "-1",fontSize: "270%"}}/>
        </div>
    </div>
  );
}

export default DogUsers;
