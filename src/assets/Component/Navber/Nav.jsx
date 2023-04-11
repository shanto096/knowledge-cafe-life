import React from 'react';
import './Nav.css'

const Nav = () => {
    const profile = {
        isActive: true,
        proPic: "https://randomuser.me/api/portraits/men/81.jpg"
    }
    return (
            <div className='nav'>
            <h1>Knowledge-Cafe</h1>
            <div>
                <img  className='my-profile' src={profile.proPic}alt="" />
            </div>
        </div>
    );
};

export default Nav;