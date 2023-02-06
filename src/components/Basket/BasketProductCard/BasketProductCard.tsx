import React, {useState} from 'react';
import './BasketProductCard.css'

import {IBasketProps} from "../../../interfaces";
import {NavLink} from "react-router-dom";


function BasketProductCard(props: IBasketProps) {
    let [payCheckbox, setPayCheckbox] = useState(false)

    let changeCheckbox = () => {
        setPayCheckbox(!payCheckbox)
        console.log(props.selectedProducts)
        // if (props.selectedProducts.find(elem => props.product.id) !== undefined) {
        //     props.setSelectedProducts(prevState => [...prevState, props.product.id])
        // }
            // else {
        //     let idArray = props.selectedProducts.filter(id => {
        //         return id !== props.product.id
        //     })
        //    props.setSelectedProducts(idArray)
        // }

    }

    return (
        <div className="basketProductCard">
            <input
                className={'payCheckbox'}
                type="checkbox"
                style={{display: props.checkboxStyle}}
                onChange={changeCheckbox}
            />
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