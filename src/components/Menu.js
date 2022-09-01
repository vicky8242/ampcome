import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {

    return (
        <>
        <div className="container">
            
            <div className="sign-in">
                <h2>Sign-in to your account</h2>
                <input className="email" placeholder='Username'></input>
                <input className="email" placeholder='password'></input>
                <select className="select-unit" > 
                <option>Select Unit Name</option>
                 </select>
                 <NavLink to="/dashboard"><button className="sign-in-btn">Sign in</button></NavLink>

            </div>
            </div>
        </>
    )
}

export default Menu