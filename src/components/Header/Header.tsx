import React from 'react';
import './Header.css'
import {Button} from "@mui/material";
// @ts-ignore
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
// @ts-ignore
import {NavLink} from "react-router-dom";
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
                                <Button variant='contained' size='small'>Главная</Button>
                            </li>
                        </NavLink>
                        <NavLink to={'/basket'}>
                            <li className='navigation__item'>
                                <Button variant='contained' size='small'>
                                    <p>Корзина</p>
                                    <AddShoppingCartSharpIcon />
                                </Button>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;