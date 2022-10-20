import React from 'react'
import { Routes, Route } from 'react-router'
import DogUsers from './components/Dogs'
import Settings from './components/Settings'
// import ConversationsCard from './components/ConversationsCard'




const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DogUsers/>} />
            {/* <Route path="/Conversations" element={<ConversationsCard/>} />  */}
            <Route path="/Settings" element={<Settings/>} />
        </Routes>
    );
};

export default Router;