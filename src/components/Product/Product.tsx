import './Product.css'

import {NavLink} from "react-router-dom";

interface props {
    title: string,
    price: number,
    category: string,
    image: string,
    id: number
}

function Product(props : props) {

    return (
        <NavLink className='product' to={`/products/${props.id}`}>
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
        </NavLink>
    );
}

export default Product;