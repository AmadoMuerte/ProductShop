import React from 'react';
import {BasketProps} from "../../../interfaces";

function BasketProductCard(props: BasketProps) {

    return (
        <div className="basketProductCard">
            <h2 className={'basketProductCard__title'}>
                {props.product.title}
            </h2>
            <button onClick={() => props.deleteFunc(props.product.id)}>delete</button>
        </div>
    );
}

export default BasketProductCard;