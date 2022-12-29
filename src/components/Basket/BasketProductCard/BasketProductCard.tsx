import React from 'react';
import { IProduct } from "../../../interfaces";

interface Props {
    product: IProduct,
    deleteFunc(id: number): void
}

function BasketProductCard(props: Props) {

    return (
        <div className="basket__item">
            {props.product.title}
            <button onClick={() => props.deleteFunc(props.product.id)}>delete</button>
        </div>
    );
}

export default BasketProductCard;