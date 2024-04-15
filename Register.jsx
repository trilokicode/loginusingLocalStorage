

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
export const Register = () =>{
const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email : "",
        password : "",
    });
// handling the input values

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value,
        })
    }

// handling the form submission


const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(user));
        navigate("/login");
      }

    
    return (<>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container container-register">
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br />
                            <form onSubmit={handleSubmit} className="register-input">
                                <div>
                                    <label htmlFor="username">Username</label><br />
                                    <input type="text" 
                                    name="username"
                                    id="username" 
                                    placeholder="Enter Your Username" 
                                    autoComplete="off"
                                    required 
                                    value={user.username}
                                    onChange={handleInput}
                                    />
                                </div>

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
                                <button type="submit" className="btn btn-submit">Register Now</button>
                                <p>Already have a account ?? </p>
                                <NavLink to={"/login"}>Login</NavLink>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </main>
        </section>
    
    </>
    )
}

