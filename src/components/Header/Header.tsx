import React from 'react';
import './Header.css'
import { NavLink } from "react-router-dom";
import SearchPanel from "../SearchPanel/SearchPanel";
function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        Amado Shop
                    </div>
                    <SearchPanel />
                    <ul className='navigation'>
                        <NavLink to={'/'}>
                            <li className='navigation__item'>
                                Main
                            </li>
                        </NavLink>
                        <NavLink to={'/basket'}>
                            <li className='navigation__item'>
                                Basket
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;