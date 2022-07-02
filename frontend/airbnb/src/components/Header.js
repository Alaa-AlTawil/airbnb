import React from 'react';
import logo from '../assets/airbnblogo.png'
function Header() {
    return (  
        <div className="header">
            <div className="left-side-header"><img height={50} src={logo}></img></div>
            <div className="mid-side-header">
                <div className='mid-side-content'>
                    <div>Anywhere</div>
                    <div>Any week</div>
                    <div>Add guests</div>
                    <div><img ></img></div>
                </div>
            </div>
            <div className="right-side-header"></div>
        </div>
    );
}

export default Header;