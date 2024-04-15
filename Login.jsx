import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
export const Login = () => {
const navigate = useNavigate();
  const [user, setUser] = useState({
    email : "",
    password : "",
});

const handleInput = (e) =>{
  let name = e.target.name;
  let value = e.target.value;

  setUser({
      ...user,
      [name] : value,
  })
}

const handleLogin = (e) =>{
  e.preventDefault();
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  if(user.email === loggedUser.email && user.password === loggedUser.password){
    localStorage.setItem("loggedin", true);
    navigate("/");
  } 
  else{
    alert("Wrong email or password");
  }
        
}
  

  return (
    <>
        <section>
            <main>
                <div className="section-login">
                    <div className="container login-container">
                        

                        <div className="login-form">
                            <h1 className="main-heading mb-3">Login Form</h1>
                            <br />
                            <form onSubmit={handleLogin} className="login-menu">

                                <div>
                                    <label htmlFor="email">Email</label><br />
                                    <input type="email" 
                                    name="email"
                                    id="email" 
                                    placeholder="Enter Your email" 
                                    autoComplete="off"
                                    required 
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label><br />
                                    <input type="password" 
                                    name="password"
                                    id="password" 
                                    placeholder="Enter Your password" 
                                    autoComplete="off"
                                    required 
                                    value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">Login</button>
                                <p>Don't have a Account ?</p>
                                <span><NavLink to={"/register"}>Register</NavLink></span>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>

    </>
  )
}

