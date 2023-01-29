import React from 'react';
import './Filters.css'
import CategorySelect from "./CategorySelect/CategorySelect";
import PriceFilter from "./PriceFilter/PriceFilter";
import SearchPanel from "./SearchPanel/SearchPanel";
import {useAppDispatch} from "../App/hooks";

function Filters() {
    const dispatch = useAppDispatch()
    const startProductFilter = () => {

    }
    return (
        <div className='filters'>
                <SearchPanel />
                <CategorySelect />
                <PriceFilter />
                <div className='filters__button'>
                    <button className='filters__button-item' onClick={startProductFilter}>
                        Search
                    </button>
                </div>
        </div>
    );
}

export default Filters;