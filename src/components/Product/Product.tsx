import './Product.css'

import {NavLink} from "react-router-dom";
import Rating from "../Rating/Rating";
import ProductBtn from "../ProductBtn/ProductBtn";
import {useDispatch} from "react-redux";
import {addProduct} from "../../slices/basketSlice";

import {IProduct} from "../../interfaces";

function Product(props : IProduct) {

    const dispatch = useDispatch()

    let title: string[] = props.title.split('')
    if (title.length >= 35) {
        title.splice(35, title.length - 35, '...')
    }

    let addToBasket = () => {
        dispatch(addProduct(props.id))
        return undefined
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
                <ProductBtn title={'Buy'} click={addToBasket}/>
                <p className='product__price'>{`${props.price} $` }</p>
                <Rating rate={props.rating.rate} />
            </div>
        </div>
    );
}

export default Product;