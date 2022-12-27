import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";

import './ProductList.css'
import Product from "../Product/Product";
import Skeleton from "../CssComponents/Skeleton/Skeleton";

import {  IProduct } from '../../interfaces'

function ProductList() {

      let [products, setProducts] = useState<IProduct[]>([])

     const getAllProduct =  async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then ((response: AxiosResponse) => {
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (products.length === 0) {
            getAllProduct()
        }
    })

    let productList: JSX.Element[]  = []

    let CreateProductList = () => {
        if (products.length > 1) {
            productList = products.map(
                (item: IProduct) => {
                    return (
                        <Product
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            image={item.image}
                            id={item.id}
                            rating={item.rating}
                            key={item.id}
                        />)
            })
        } else {
            for (let i = 0; i < 6; i++) productList.push(
                <Skeleton width={'380px'} height={'500px'} key={i}/>
            )
        }
    }

    CreateProductList()

    return (
        <div className='product-list'>
            {productList}
        </div>
    )
}

export default ProductList