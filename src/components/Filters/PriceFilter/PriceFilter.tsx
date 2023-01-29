import React, {Dispatch, SetStateAction} from 'react';
import './PriceFilter.css'

interface IProps {
    startPrice: number
    setStartPrice: Dispatch<SetStateAction<number>>
    lastPrice: number
    setLastPrice: Dispatch<SetStateAction<number>>
}

function PriceFilter(props: IProps) {

    return (
        <div className='priceFilter'>
            <p>Price</p>
            <div className='priceFilter__items'>
                <input
                    type='text'
                    placeholder='0$'
                    value={props.startPrice}
                    onChange={(e) => props.setStartPrice(Number(e.target.value))}
                />
                <input
                    type='text'
                    placeholder='100$'
                    value={props.lastPrice}
                    onChange={(e) => props.setLastPrice(Number(e.target.value))}
                />
            </div>
        </div>
    );
}

export default PriceFilter;