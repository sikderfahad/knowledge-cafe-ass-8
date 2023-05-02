import React from 'react';
import './Header.css'
import profile from '../../assets/img/profile.JPG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <h1><span>K</span>nowledge <span>Cafe</span></h1>
                </div>
                <div className="menubar">
                    <ul>
                        <li className='hidden'><a href="">Home</a></li>
                        <li className='hidden'><a href="">About</a></li>
                        <li className='hidden'><a href="">Contact us</a></li>
                        <li className='hidden'><a href="">Premium <sup><FontAwesomeIcon icon={faPlus} /></sup></a></li>
                        <li><a href="">
                            <img src={ profile} alt="" />
                        </a></li>
                    </ul>
                </div>
            </nav> 
        </header>
    );
};

export default Header;