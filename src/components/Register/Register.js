import React, { useState } from 'react'
import './Register.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();
  const [user,setuser]=useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })
  const handleChange=(e)=>{
   
    const{name,value}=e.target
    setuser((prevuser)=>({
      ...prevuser,
      [name]:value
    }))
  }
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user)
        .then((res) => {
          alert(res.data.message); // Log the response data
          // You can provide user feedback here based on the response
         navigate("/login")
        })
        .catch((error) => {
          console.error('AxiosError:', error);
          // Provide user feedback for registration failure
          alert("Registration failed. Please try again.");
        });
    } else {
      alert("Invalid input or passwords do not match.");
    }
  };
  
  return (
    <div className='register'>
      {}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder='Your Password' onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter your Password' onChange={handleChange}></input>
        <div className='button' onClick={register}>Register</div>
        <div>OR</div>
        <div className="button" onClick={()=>navigate("/login")}>Login</div>
    </div>
  )
}

export default Register