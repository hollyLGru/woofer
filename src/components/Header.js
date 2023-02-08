import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import wooferlogo from './wooferLogo.png'

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
                <img src={wooferlogo} alt="woofer logo" 
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