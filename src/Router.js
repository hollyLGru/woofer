import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
// import Home from './components/Home'
// import About from './components/About'
// import Login from './components/Login'
// import Register from './components/Register'
// import Welcome from './components/Welcome'
// import Upload from './components/Upload'
// import PangeaEntry from './components/PangeaEntry'
// import CarouselCard from './components/CarouselCard'



const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Welcome/>} />
            <Route path="/Carousel" element={<CarouselCard/>} />
            <Route path="/Home" element={<ProtectedRoute component={Home} />} />
            <Route path="/Upload" element={<ProtectedRoute component={Upload} />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/PangeaEntry/:id" element={<ProtectedRoute component={PangeaEntry} />} /> */}
        </Routes>
    );
};

export default Router;