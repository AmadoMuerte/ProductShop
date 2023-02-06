
import './Basket.css'

import {useAppDispatch, useAppSelector} from "../App/hooks";
import { deleteProduct } from "../../slices/basketSlice";
import BasketProductCard from "./BasketProductCard/BasketProductCard";
import {IProduct} from "../../interfaces";
import {useEffect, useState} from "react";
import PayNavigation from "./PayNavigation/PayNavigation";

function Basket() {
    let [checkboxStyle, setCheckboxStyle] = useState('none')
    let [selectedProducts, setSelectedProducts] = useState<number[]>([0])
    const basketProducts = useAppSelector(
        (state) => state.basket.basketProducts)

    let sum = 0
    let countSumProducts = () => {
        for(let i = 0; i <= basketProducts.length; i++) {
           if (basketProducts[i].id === selectedProducts[i]) {
               sum += basketProducts[i].price
           }
        }
    }
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
                    <BasketProductCard
                        product={item}
                        deleteFunc={deleteFunc}
                        key={item.id}
                        checkboxStyle={checkboxStyle}
                        setCheckboxStyle={setCheckboxStyle}
                        selectedProducts={selectedProducts}
                        setSelectedProducts={setSelectedProducts}
                    />
                )
            })
        } else {
            return [<div className='basket__emptyTitle' key={303030}>your basket is empty.</div>]
        }
    }

    let productList: JSX.Element[]  = createBasketItems()
    return (
        <div className='basket'>
            <PayNavigation
                amount={sum}
                showCheckboxes={setCheckboxStyle}
                checkboxStyle={checkboxStyle}/>
            {productList}
        </div>
    );
}

export default Basket;