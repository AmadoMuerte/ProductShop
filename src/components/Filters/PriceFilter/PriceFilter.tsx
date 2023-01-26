import React from 'react';
import './PriceFilter.css'

function PriceFilter() {
    return (
        <div className='priceFilter'>
            <p>Price</p>
            <div className='priceFilter__items'>
                <div>
                    <input type="number" placeholder='0$'/>
                </div>
                <div>
                    <input type="number" placeholder='100$'/>
                </div>
            </div>
        </div>
    );
}

export default PriceFilter;