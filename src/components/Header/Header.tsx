import React from 'react';
import './Header.css'
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="logo">

                    </div>
                    <ul className='navigation'>
                        <NavLink to={'/'}>
                            <li className='navigation__item'>
                                Главная
                            </li>
                        </NavLink>
                        <NavLink to={'/basket'}>
                            <li className='navigation__item'>
                                Корзина
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;