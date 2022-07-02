import React, { useState } from 'react'
import { useNavigate } from 'react-router'


export const Registration = () => {
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        mobile: "",
        confrmPassword: ""
    })
    const [errors, setErrors] = useState({
        username: "e",
        email: "e",
        mobile: "e",
        password: "e",
        cnfrmPassword: "e",
    })
    const navigate = useNavigate()

   
    const handleOnChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.className]: e.target.value,
        })
    }

   
    const handeleSignup = async (event) => {
        event.preventDefault();

        setErrors({
            ...errors,
            username: userDetails.username,
            email: userDetails.email,
            mobile: userDetails.mobile,
            password: userDetails.password,
            conformPassword: userDetails.conformPassword
        });

        if (userDetails.username.trim() == "" || userDetails.email.trim() == "" || userDetails.mobile.trim() == "" 
         ) {
        }
        else {
            delete userDetails.conformPassword;
            let result = await fetch('https::/localhost:30000/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails)
            })
            result = await result.json();

            if (result.status) { // if submitted successfully
                alert(result.message);
                navigate('/login')
            } else {
                alert('wrong!');
            }
        }

    }

    return (
        <div >
            <form >
                <div >
                    <div>
                        <p>Signup Page</p>
                    </div>
                    <div >
                        <label For="username">User Name </label>
                        <input type="text" className='username' onChange={handleOnChange}  />
                        
                    </div>
                    <div >
                        <label For="email">Email </label>
                        <input type="text" className='email' onChange={handleOnChange} />
                       
                    </div>
                    <div >
                        <label  For="mobile">Mobile Number </label>
                        <input type="text" className='mobile' onChange={handleOnChange} />
                       
                    </div>
                    <div>
                        <label For="password">Password </label>
                        <input type="text" className='password' onChange={handleOnChange} />
                        
                    </div>
                    <div >
                        <label For="confirm password">Confirm Password </label>
                        <input type="text"  onChange={handleOnChange} />

                        
                    </div>
                    <div>
                        <button type="submit"  onClick={handeleSignup}>Register</button>
                    </div>
                    
                </div>
            </form>
        </div >
    )
}
