import React from 'react';
import './Filters.css'
import SearchPanel from "./SearchPanel/SearchPanel";
import BottomFilters from "./BottomFilters/BottomFilters";
import FilterCounting from "./FilterCounting/FilterCounting";

function Filters() {
    return (
        <div className='filters'>
            <div className='filter'>
                <SearchPanel />
                <BottomFilters />
            </div>
            <FilterCounting />
        </div>
    );
}

export default Filters;