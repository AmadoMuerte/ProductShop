import React, {useEffect, useState} from 'react';
import './ProductCard.css'
import axios from "axios";
import {useParams} from "react-router-dom";
import Skeleton from "../CssComponents/Skeleton/Skeleton";
import Rating from "../Rating/Rating";

interface Product {
    title: string,
    price: number,
    category: string,
    image: string,
    id: number,
    description: string,
    rating: {rate: number, count: number}
}
function ProductCard() {
    const [stateProduct, setProduct] = useState<Product>()
    const prodId = useParams().id;

    const getProduct =  async () => {
        await axios.get(`https://fakestoreapi.com/products/${prodId}`)
            .then ((response: any) => {
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getProduct()
    })

    const productBody = () => {
        if (stateProduct) {
                return (
                    <>
                        <div className='product__top'>
                            <h2 className="product__title">
                                {stateProduct.title}
                            </h2>
                            <p className='product__subtitle'>{stateProduct.category}</p>
                        </div>
                        <div className="card__img">
                            <img src={stateProduct.image} alt="product"/>
                        </div>
                        <div className={'productCard__bottom'}>
                            <p>{stateProduct.description}</p>
                            <Rating rate={stateProduct.rating.rate} />
                        </div>
                    </>
                )
        } else {
            return <Skeleton width={'500px'} height={'600px'}/>
        }
    }

    return (
        <div className='productCard'>
            <div className="container">
                <div className="productCard__inner">
                    { productBody()}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;