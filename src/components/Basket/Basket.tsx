import React, {useEffect, useState} from 'react';
import './Basket.css'
import {useAppSelector} from "../App/hooks";
import axios, {AxiosResponse} from "axios";

interface Product {
    title: string,
    price: number,
    category: string,
    image: string,
    id: number,
    description: string,
    rating: {rate: number, count: number}
}

function Basket() {
    const idProducts = useAppSelector((state) => state.basket.idProducts)

    let [basket, setBasket] = useState<Product[]>([])

    const getProduct =  async () => {
        let datas: Product[] = []
        for(let i = 0; i < idProducts.length; i++) {
            await axios.get(`https://fakestoreapi.com/products/${idProducts[i]}`)
                .then ((response: AxiosResponse) => {
                    let data: Product = response.data
                    datas.push(data)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
        setBasket(datas)
    }

    useEffect(() => {
        if (!basket) {
            getProduct()
        }
    })

    const createBasketItems = () => {
        if (basket.length > 0) {
            let products: JSX.Element[] = []
            products = basket.map((item: Product) => {
                return (
                    <div className="basket__item">
                        {item.title}
                    </div>
                )
            })
            return products
        } else {
            return 'Ой, пустенько'
        }
    }

    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__inner">
                    {createBasketItems()}
                </div>
            </div>
        </div>
    );
}

export default Basket;