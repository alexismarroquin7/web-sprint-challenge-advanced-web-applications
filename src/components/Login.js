import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentails] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  const handleChange = e => {
    setCredentails({
      ...credentials,
      [e.target.name]: e.target.value 
    });
    console.log(props)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Welcome to the Bubble App!</h1>
    <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username: " />
    <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password: " />
    <button>Login</button>
    </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.