import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const Home = () => {
    const [username, setUsername] = useState("")
    
    const { id } = useParams();
    const navigate = useNavigate();


    const verifyToken = async (token) => { // to verify Token
        let result = await fetch(`https://localhost:3000/postman.com/verifyToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        })
        result = await result.json();
        if (!result.status) {
            alert("please login")
            navigate('/login')
            return;
        }
    }

    const getName = async () => { 
        let result = await fetch(`https:://localhost3000/login/${id}`)
        result = await result.json();
        if (!result.status) {
            alert("Please login")
            navigate('/login')
            return;
        }
        console.log(result.data)
        setUsername(result.data[0].username)
    }


    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("token"))
        if (!token) {
            alert("Unauthorised please login")
            navigate("/login")
            return;
        }

        verifyToken(token)
        getName()

      
    }, [])

    return (
        <div>
            <h1>welcome {username}</h1>
        </div>
    )
}

export default Home