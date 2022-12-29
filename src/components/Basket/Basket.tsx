import React, {useEffect, useState} from 'react';
import './Basket.css'
import {useAppSelector} from "../App/hooks";
import axios, {AxiosResponse} from "axios";
import {IFullProduct} from "../../interfaces";
import {useDispatch} from "react-redux";
import { deleteProduct } from "../../slices/basketSlice";
import BasketProductCard from "./BasketProductCard/BasketProductCard";

function Basket() {
    const idProducts = useAppSelector((state) => state.basket.idProducts)
    const dispatch = useDispatch()

    let [basket, setBasket] = useState<IFullProduct[]>([])
    const getProduct =  async (id: number) => {
            if (basket.length < 1) {
                await axios.get(`https://fakestoreapi.com/products/${id}`)
                    .then ((response: AxiosResponse) => {
                        let product: IFullProduct = response.data
                        setBasket(prev =>  [...prev, product])
                    })
                    .catch( err => {
                        console.log(err.message)
                    })
            }
    }

    useEffect(() => {
        for(let i = 0; i < idProducts.length; i++) {
            getProduct(idProducts[i])
        }
    })

    const deleteFunc = (id: number) => {
        dispatch(deleteProduct(id))
        let newProductState = basket.filter(product => product.id !== id)
        setBasket(newProductState)
    }

    const createBasketItems = () => {
        return basket.map((item: IFullProduct) => {
            return (
                <BasketProductCard product={item} deleteFunc={deleteFunc} key={item.id}/>
            )
        })
    }
    let productList: JSX.Element[]  = createBasketItems()

    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__inner">
                    {productList}
                </div>
            </div>
        </div>
    );
}

export default Basket;