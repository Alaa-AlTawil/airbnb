import React from 'react';
import logo from '../assets/airbnblogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGlobe, faBars, faUser, faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (  
        <div className="header">
            <div className="left-side-header"><img height={50} src={logo}></img></div>
            <div className="mid-side-header">
                <div className='mid-side-content'>
                    <div><strong>Anywhere</strong></div>
                    <div><strong>Any week</strong></div>
                    <div>Add guests</div>
                    <button><FontAwesomeIcon icon={faSearch} color='white' /></button>
                </div>
            </div>
            <div className="right-side-header">
                <div><strong>Become a Host</strong></div>
                <div><FontAwesomeIcon icon={faGlobe} color='black' /></div>
                <button><div><FontAwesomeIcon icon={faBars} color='black' /></div><div><FontAwesomeIcon icon={faCircleUser} color='gray'/></div></button>
            </div>
        </div>
    );
}

export default Header;