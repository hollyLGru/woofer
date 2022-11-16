import * as React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayIcon from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';
import LikeButton from './Like';
import DislikeButton from './Dislike';

function DogUsers() {
  const [dogs , updateDogs] = useState([]);
  const [name, setName] = useState([]);
  const [hobby, setHobby] = useState([])
  const [isHidden, setIsHidden] = useState(true);

  const [likedDogs, setLikedDogs] = useState(false);
  const [dislikedDogs, setDislikedDogs] = useState(false);
  // const [superLikedDogs, setSuperLikedDogs] = useState([]);

  let gender = ["Male", "Female"];
  let age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15]
  
  const fetchData = async () => {
    const dogPicturesAPI = await axios(`https://dog.ceo/api/breeds/image/random`);
    const randomNameAPI = await axios(`https://random-data-api.com/api/name/random_name`);
    const activityAPI = await axios(`https://www.boredapi.com/api/activity`);
      updateDogs(dogPicturesAPI.data);
      setName(randomNameAPI.data);
      setHobby(activityAPI.data)
  }

  useEffect(() => {;
    const fetchData = async () => {
      const dogPicturesAPI = await axios(`https://dog.ceo/api/breeds/image/random`);
      const randomNameAPI = await axios(`https://random-data-api.com/api/name/random_name`);
      const activityAPI = await axios(`https://www.boredapi.com/api/activity`);
        updateDogs(dogPicturesAPI.data);
        setName(randomNameAPI.data);
        setHobby(activityAPI.data)
    };
    fetchData();
    
  }, []);

  const likeDog = () => {
    setLikedDogs(!likedDogs);
    fetchData();
  }

  useEffect(() =>{
    console.log("button was clicked");
    return () => {
       likedDogs ? setLikedDogs(!likedDogs) : setLikedDogs(likedDogs)  
    }

  })


  const dislikeDog = () => {
    setDislikedDogs(!dislikedDogs);
    fetchData()
  }

  return (
    <div className="Dogs" style={{width: "300pt", paddingBottom: "5%"}}>


      {/* Dog Image */}
          <img src={dogs.message} alt="" style={{
            borderRadius: "10px", 
            objectFit: "cover", 
            width: "300pt", 
            height: "300pt", 
            border: "1px solid lightgrey",
            boxShadow: "0px 18px 53px 0px grey",
            marginBottom: "5%"
            }}/>


{/* Like or not like  */}
          { likedDogs ? <LikeButton/> : <div/>  }
          { dislikedDogs ? <DislikeButton/> : <div/>  }


        {/* hidden info about dogs */}
          <h2 onClick={() => setIsHidden(!isHidden)}>{name.name} </h2>
          {isHidden ? "" : 
          <div style={{color: "grey"}}>
            <h3> {gender[Math.floor(Math.random() * gender.length)]}, {age[Math.floor(Math.random() * age.length)]}</h3>
            <br></br>
            <h3>I would like to...  "{hobby.activity} with you"</h3>
          </div>} 


            {/* buttons */}
        <div style={{ display: "flex", justifyContent: "center", width: "300pt", marginTop: "5%"}}>
          <ReplayIcon style={{color: "#FDCD5F", margin: "-1", fontSize: "270%", borderRadius: "100%", border: "8px solid #F4F4F4"}}/>
          <ClearIcon onClick={dislikeDog} style={{margin: "-1", color: "#FD6B6B", fontSize: "500%", borderRadius: "100%", border: "8px solid #F4F4F4"}} />
          <FavoriteIcon onClick={likeDog} style={{margin: "-1", color: "#4FCC94", fontSize: "500%", borderRadius: "100%", border: "8px solid #F4F4F4"}}/>
          <StarIcon style={{borderRadius: "100%", border: "8px solid #F4F4F4", color: "#2EB3C9", margin: "-1",fontSize: "270%"}}/>
        </div>
    </div>
  );
}

export default DogUsers;
