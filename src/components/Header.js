import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function Header() {
    
    return(
        <div className="header" style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid lightgrey",
            objectFit: "contain",
            marginTop: "5%",
            marginBottom: "2%",
            paddingBottom: "1%",
            width: "300pt"
         }}>

            <IconButton>
                <Link to="./Settings">
                    <SettingsIcon style={{color: "lightgrey"}}/>
                </Link>
            </IconButton>
            {/* wrapping the icons in icon button for clickable/hover effect!! very cool love it */}

            <Link to="./">
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/311952548_1273068430183231_1014797793680236023_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=8uWsbjjbQikAX_9cKpa&_nc_oc=AQnGvyoqCZxwgnR5WztRSZOq_-m0SZFZ9ZHzdp9AYz9cJcg8NXfUiMPQv24Rj-lK8l8suFTRKPkPqEKVGsdiqtw5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTp7pMLWwQpfz5947fQMqTwLFusmAzS6EyNpa_yfv8cTQ&oe=63764781" alt="woofer logo" 
                style={{width: "130pt", margin:"5%"}}/>
            </Link>

            <IconButton>
                <Link to="./Messages">
                    <ChatBubbleIcon style={{color: "lightgrey"}}/>
                </Link>
            </IconButton>
        </div>
    )
}

export default Header