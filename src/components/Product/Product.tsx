import React from 'react';
import './Product.css'

function Product(props : {title: string, price: number, category: string, image: string}) {

    return (
        <div className='product'>
            <div className='product__top'>
                <h2 className="product__title">
                    {props.title}
                </h2>
                <p className='product__subtitle'>{props.category}</p>
            </div>
            <div className={'product__img'}>
                < img src={props.image} alt="product" />
            </div>
            <p className='product__price'>{`${props.price} $` }</p>
        </div>
    );
}

export default Product;