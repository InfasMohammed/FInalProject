import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

//   axios.defaults.withCredentials = true;
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3001/login', {email,password})
//     .then(res =>{
//       if(res.data.Status === "Success" ) {
//         if(res.data.role === "admin") {
//           navigate('/')
//         }else{
//           navigate('/')
//         }
//       }
//     }).catch(err => console.log(err))
// }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input
                    type='email' 
                    placeholder='Enter Email' 
                    autoComplete="off" 
                    name='email'
                    // onChange={(e) => setEmail(e.target.value)}
                    className='form-control rounded-0'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input
                    type='password' 
                    placeholder='Enter Password' 
                    autoComplete="off" 
                    name='password'
                    // onChange={(e) => setPassword(e.target.value)}
                    className='form-control rounded-0'
                    />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Login
                </button>
                <div>
                  
                </div>
            </form>
            <p className="text-align-center">If you don't have an account? <Link to={"/signup"}>Signup</Link></p>
        </div>
        
    </div>
  );
};

export default Login;