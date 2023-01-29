import React, {useState} from 'react';
import './Filters.css'
import CategorySelect from "./CategorySelect/CategorySelect";
import PriceFilter from "./PriceFilter/PriceFilter";
import SearchPanel from "./SearchPanel/SearchPanel";
import {useAppDispatch} from "../App/hooks";
import {searchByCategory, searchByName, searchByPrice} from "../../slices/productsSlice";

function Filters() {
    const [category, setCategory] = useState<string>('')
    const [productName, setProductName] = useState<string>('')
    const [startPrice, setStartPrice] = useState<number>(0)
    const [lastPrice, setLastPrice] = useState<number>(100)
    const dispatch = useAppDispatch()
    const startSearchProducts = () => {
        dispatch(searchByCategory(category))
        if (productName !== '') {
            dispatch(searchByName(productName.toLowerCase()))
        }
        dispatch(searchByPrice({startPrice, lastPrice}))
    }

    return (
        <div className='filters'>
                <SearchPanel productName={productName} setProductName={setProductName}/>
                <CategorySelect category={category} setCategory={setCategory}/>
                <PriceFilter
                    startPrice={startPrice}
                    setStartPrice={setStartPrice}
                    lastPrice={lastPrice}
                    setLastPrice={setLastPrice}
                />

                <div className='filters__button'>
                    <button className='filters__button-item' onClick={startSearchProducts}>
                        Search
                    </button>
                </div>
        </div>
    );
}

export default Filters;