import React, {useEffect} from 'react';
import axios, {AxiosResponse} from "axios";

import './ProductList.css'
import Product from "../Product/Product";
//import Skeleton from "../CssComponents/Skeleton/Skeleton";
import { IFullProduct } from '../../interfaces'

import {useAppDispatch, useAppSelector} from "../App/hooks";
import { addProducts } from "../../slices/productsSlice";
import Filters from "../Filters/Filters";

function ProductList() {
    const dispatch = useAppDispatch()
    const productData = useAppSelector(state => state.productList.productsData)
    const searchingData = useAppSelector(state => state.productList.searchingData)
    const searching = useAppSelector(state => state.productList.searching)

    let productList: JSX.Element[] = []

    useEffect(() => {
        getAllProduct().then(response => response)
    })

    const getAllProduct =  async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then ((response: AxiosResponse) => {
                let productData: IFullProduct[] = response.data
                dispatch(addProducts(productData))
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    let createProductList = (productData: IFullProduct[]) => {
        productList = productData.map(
            (product: IFullProduct) => {
                return (
                    <Product
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                        id={product.id}
                        rating={product.rating}
                        key={product.id}
                    />)
        })
    }

    const updateProductList = () => {
        if (!searching) {
                createProductList(productData)
        } else {
            if (searchingData.length === 0) {
                productList.push( <div key={'empty-list'}>Empty</div> )
            } else {
                createProductList(searchingData)
            }
        }
    }
    updateProductList()

    return (
        <div className='mainList'>
            <Filters />
            <div className='product-list'>
                {productList}
            </div>
        </div>
    )
}

export default ProductList