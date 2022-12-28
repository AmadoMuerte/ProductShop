import React, {useEffect, useState} from 'react';
import './Basket.css'
import {useAppSelector} from "../App/hooks";
import axios, {AxiosResponse} from "axios";
import {IFullProduct} from "../../interfaces";

function Basket() {
    const idProducts = useAppSelector((state) => state.basket.idProducts)

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

        getProduct(5)


    const createBasketItems = () => {
        if (basket.length > 1) {
            return basket.map((item: IFullProduct) => {
                return (
                    <div className="basket__item" key={item.id}>
                        {item.title}
                    </div>
                )
            })
        } else {
            return []
        }
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