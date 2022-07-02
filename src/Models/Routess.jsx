import React from 'react'
import { Route, Routes } from 'react-router'
import { Registration } from "../Components/Registration"
import Login from '../components/Login'
import Home from './Home'

const Routess = () => {
    return (
        <div>
            <Routes>
                <Route path="/:id" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                
            </Routes>
        </div>
    )
}

export default Routess