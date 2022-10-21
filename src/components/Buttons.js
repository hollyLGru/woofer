import * as React from 'react';
import  { useState, useEffect } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayIcon from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';



function Buttons() {


  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
        <ReplayIcon style={{color: "#FDCD5F", margin: "-2", fontSize: "270%", borderRadius: "100%", border: "8px solid #F4F4F4"}}/>
        <ClearIcon style={{margin: "-2", color: "#FD6B6B", fontSize: "500%", borderRadius: "100%", border: "8px solid #F4F4F4"}} />
        <FavoriteIcon style={{margin: "-2", color: "#4FCC94", fontSize: "500%", borderRadius: "100%", border: "8px solid #F4F4F4"}}/>
        <StarIcon style={{color: "#2EB3C9", margin: "-2",fontSize: "270%", borderRadius: "100%", border: "8px solid #F4F4F4"}}/>
    </div>
  );
}

export default Buttons;