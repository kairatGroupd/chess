import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './images/GALOGO-2.png';


function Header() {
    return (
        <div className="header">
            <div>
                <img className="logo" src={Logo} alt=""/>
            </div>
        </div>
    )
}

export default Header;
