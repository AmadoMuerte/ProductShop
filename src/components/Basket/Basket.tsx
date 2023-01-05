
import './Basket.css'

import {useAppDispatch, useAppSelector} from "../App/hooks";
import { deleteProduct } from "../../slices/basketSlice";
import BasketProductCard from "./BasketProductCard/BasketProductCard";
import {IProduct} from "../../interfaces";
import {useEffect} from "react";

function Basket() {

    const basketProducts = useAppSelector(
        (state) => state.basket.basketProducts)

    const dispatch = useAppDispatch()

    let setProductsToStorage = () => {
        let products = JSON.stringify(basketProducts)
        localStorage.setItem('basketProducts', products )
    }

    useEffect(() => {
        setProductsToStorage()
    })

    const deleteFunc = (id: number) => {
        dispatch(deleteProduct(id))
    }

    const createBasketItems = () => {
        if (basketProducts.length > 0) {
            return basketProducts.map((item: IProduct) => {
                return (
                    <BasketProductCard product={item} deleteFunc={deleteFunc} key={item.id}/>
                )
            })
        } else {
            return [<div className='basket__emptyTitle' key={303030}>your basket is empty.</div>]
        }
    }

    let productList: JSX.Element[]  = createBasketItems()
    return (
        <div className='basket'>
            {productList}
        </div>
    );
}

export default Basket;