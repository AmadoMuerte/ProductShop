import React from 'react';
import './BasketProductCard.css'

import {IBasketProps} from "../../../interfaces";
import {NavLink} from "react-router-dom";


function BasketProductCard(props: IBasketProps) {

    return (
        <div className="basketProductCard">
            <div className='basketProductCard__top'>
                <NavLink className='basketProductCard__info' to={`/${props.product.id}`}>
                    <div className='basketProductCard__image'>
                        <img src={props.product.image} alt="product"/>
                    </div>
                    <h2 className={'basketProductCard__title'}>
                        {props.product.title}
                    </h2>
                </NavLink>
                <button className={'btnBuy'}>buy</button>
            </div>
            <div className='basketProductCard__bottom'>
                <p>{props.product.price + '$'}</p>
                <button
                    className='basketProductCard__btn'
                    onClick={() => props.deleteFunc(props.product.id)}>delete
                </button>
            </div>

        </div>
    );
}

export default BasketProductCard;