import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("loggedin");
    navigate("/login");
  }
  const username = JSON.parse(localStorage.getItem("user"));
  return (
    <>
        <div>Home Page</div> <br /><br />
        <div>Welcome {username.username}</div>
    <br /><br />
        <button type='submit' onClick={handleLogout}>LogOut</button>
    </>
    
  )
}

export default Home