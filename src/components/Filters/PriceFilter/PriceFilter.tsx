import React, {Dispatch, SetStateAction} from 'react';
import './PriceFilter.css'

interface IProps {
    startPrice: number
    setStartPrice: Dispatch<SetStateAction<number>>
    lastPrice: number
    setLastPrice: Dispatch<SetStateAction<number>>
}

function PriceFilter(props: IProps) {

    let setPriceToState = (event: React.ChangeEvent<HTMLInputElement>, functionName: String) => {
        if (!isNaN(Number(event.target.value))) {
            if (functionName === 'startPrice') {
                props.setStartPrice(Number(event.target.value))
            } else if (functionName === 'lastPrice') {
                props.setLastPrice(Number(event.target.value))
            }
        }
    }

    return (
        <div className='priceFilter'>
            <p>Price</p>
            <div className='priceFilter__items'>
                <input
                    type='text'
                    placeholder='0$'
                    value={props.startPrice}
                    onChange={(event) => setPriceToState(event, "startPrice")}
                />
                <input
                    type='text'
                    placeholder='100$'
                    value={props.lastPrice}
                    onChange={(event) => setPriceToState(event, "lastPrice")}
                />
            </div>
        </div>
    );
}

export default PriceFilter;