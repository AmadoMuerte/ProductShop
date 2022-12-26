import './Product.css'

import {NavLink} from "react-router-dom";
import Rating from "../Rating/Rating";

interface props {
    title: string,
    price: number,
    category: string,
    image: string,
    id: number,
    rate: number
}

function Product(props : props) {

    let title: string[] = props.title.split('')
    if (title.length >= 35) {
        title.splice(35, title.length - 35, '...')
    }

    return (
        <div className={'product'}>
            <div className='product__top'>
                <h2 className="product__title">
                    {title}
                </h2>
                <p className='product__subtitle'>{props.category}</p>
            </div>
            <NavLink to={`/products/${props.id}`} className={'product__img'}>
                < img src={props.image} alt="product" />
            </NavLink>

            <div className={"product__bottom"}>
                <button className="btn-basket">
                    buy
                </button>
                <p className='product__price'>{`${props.price} $` }</p>
                <Rating rate={props.rate} />
            </div>
        </div>
    );
}

export default Product;