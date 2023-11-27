// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setLoginUser }) => {
//   const navigate = useNavigate();

//   const [user, setuser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setuser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const login = () => {
//     axios.post("http://localhost:9002/login", user)
//       .then((res) => {
//         // console.log(res.data.message);
//         alert(res.data.message);
//         setLoginUser(res.data.user);
//         navigate("/"); // Use navigate("/") to go to the homepage
//       })
//       .catch((error) => {
//         console.error('AxiosError:', error);
//         alert('Login failed. Please try again.');
//       });
//   };

//   return (
//     <div className='login'>
//       <h1>Login</h1>
//       <input
//         type="text"
//         name="email"
//         value={user.email}
//         onChange={handleChange}
//         placeholder='Enter your email'
//       ></input>
//       <input
//         type="password"
//         name="password"
//         value={user.password}
//         onChange={handleChange}
//         placeholder='Enter your password'
//       ></input>
//       <div className='button' onClick={login}>
//         Login
//       </div>
//       <div>OR</div>
//       <div className="button" onClick={() => navigate("/register")}>
//         Register
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react'
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        console.log("hello");
        navigate("/");
      })
      .catch((error) => {
        console.error('AxiosError:', error);
        alert('Login failed. Please try again.');
      });
  };

  

  return (
    <div className='login'>
        <h1>Login</h1>
        <input type='text' name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
        <input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={handleChange}></input>
        <div className='button' onClick={login}>Login</div>
        <div>or</div>
        <div className='button' onClick={()=>navigate("/register")}>Register</div>
    </div>
  )
}

export default Login