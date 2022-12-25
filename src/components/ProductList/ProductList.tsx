import React, {useEffect, useState} from 'react';
import Product from "../Product/Product";
import axios from "axios";
import './ProductList.css'
import Skeleton from "../CssComponents/Skeleton/Skeleton";

function ProductList() {

      let [products, setProducts] = useState([])

    const getProducts =  async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then ((response: any) => {
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect( () => {
        getProducts()
    })


    let productList: JSX.Element[]  = []
    let CreateProductList = () => {
        if (products.length > 1) {
            interface product {
                title: string,
                price: number,
                category: string,
                image: string,
                id: number,
                rating: {rate: number, count: number}
            }
            productList = products.map(
                (item: product) => {
                    return (
                        <Product
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            image={item.image}
                            id={item.id}
                            rate={item.rating.rate}
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