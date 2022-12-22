import React from 'react';
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='product__top'>
                <h2 className="product__title">
                    название продукта
                </h2>
                <p className='product__subtitle'>Категория</p>
            </div>
            <div className={'product__img'}>
                <img src="https://imge.com/wp-content/uploads/2019/01/imge-service-logo.png" alt=""/>
            </div>
            <p className='product__price'>500$</p>
        </div>
    );
}

export default Product;