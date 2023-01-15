import React from 'react';
import './BottomFilters.css'

function BottomFilters() {
    return (
        <div className='bottomFilters'>
            <div className='bottomFilters__top'>
                <input className='bottomFilters_input' type="text" placeholder='category'/>
                <input className='bottomFilters_input' type="text" placeholder=''/>
            </div>
            <div className='bottomFilters__bottom'>
                <input className='bottomFilters__input' type="text" placeholder='from $'/>
                <input className='bottomFilters__input' type="text" placeholder='to $'/>
            </div>
        </div>
    );
}

export default BottomFilters;