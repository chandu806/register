import React, { useState } from 'react'
import { useNavigate } from 'react-router'


const Login = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

  
    const handleOnChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.className]: e.target.value,
        })
    }

    const handeleSignin = async (e) => {
        e.preventDefault()

        console.log(userDetails)

       
        let result = await fetch('https://localhost:3000/postman.com/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails)
        })
        result = await result.json();

        if (result.status) { 
            alert(result.message);
            localStorage.setItem('token', JSON.stringify(result.token))
            navigate(`/${result.id}`)
        } else {
            alert('incorrect!');
        }
    }

    return (
        <div>

            <form onSubmit={handeleSignin}>
                <div>
                    <div >
                        <p>Login Page</p>
                    </div>
                    <div>
                        <label For="userMail">User Email </label>
                        <input type="text" className='email' onChange={handleOnChange} required />
                    </div>
                    <div >
                        <label  For="password">Password </label>
                        <input type="text" className='password' onChange={handleOnChange} required />
                    </div>
                    <div >
                        <input type="submit" value="Login" />
                    </div>
                    <p>Not user? <span  onClick={() => { navigate('/register') }}>Sign up</span> </p>
                </div>
            </form>
        </div >
    )
}

export default Login