import React, {useEffect, useState} from 'react';
import './ProductCard.css'
import axios from "axios";
import {useParams} from "react-router-dom";

function ProductCard() {
    const [product, setProduct] = useState()
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

    return (
        <div className='productCard'>
            <div className="container">
                <div className="productCard__inner">

                </div>
            </div>
        </div>
    );
}

export default ProductCard;