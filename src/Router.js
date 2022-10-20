import React from 'react'
import { Routes, Route } from 'react-router'
import DogUsers from './components/Dogs'
import Settings from './components/Settings'
import Messages from './components/Messages'




const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DogUsers/>} />
            <Route path="/Messages" element={<Messages/>} /> 
            <Route path="/Settings" element={<Settings/>} />
        </Routes>
    );
};

export default Router;