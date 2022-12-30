import React from 'react';
import './BasketProductCard.css'

import {BasketProps} from "../../../interfaces";
import {NavLink} from "react-router-dom";


function BasketProductCard(props: BasketProps) {

    return (
        <div className="basketProductCard">
            <NavLink className='basketProductCard__info' to={`/products/${props.product.id}`}>
                <div className='basketProductCard__image'>
                    <img src={props.product.image} alt="product"/>
                </div>
                <h2 className={'basketProductCard__title'}>
                    {props.product.title}
                </h2>
            </NavLink>

            <button
                className='basketProductCard__btn'
                onClick={() => props.deleteFunc(props.product.id)}>delete
            </button>
        </div>
    );
}

export default BasketProductCard;