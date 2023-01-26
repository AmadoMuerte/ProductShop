import React from 'react';
import './Filters.css'
import CategorySelect from "./CategorySelect/CategorySelect";
import PriceFilter from "./PriceFilter/PriceFilter";
import SearchPanel from "../SearchPanel/SearchPanel";


function Filters() {
    return (
        <div className='filters'>

                <SearchPanel />
                <CategorySelect />
                <PriceFilter />

                <div className='filters__button'>
                    <button className='filters__button-item'>
                        Search
                    </button>
                </div>

        </div>
    );
}

export default Filters;