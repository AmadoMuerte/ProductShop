import React, {Dispatch, SetStateAction, useState} from 'react';
import './PayNavigation.css'

function PayNavigation(props: {amount: number, showCheckboxes: Dispatch<SetStateAction<string>>, checkboxStyle: string}) {
    let [buttonValue, setButtonValue] = useState('choose to buy')
    let showChoice = () => {
        if (props.checkboxStyle === 'none') {
            props.showCheckboxes('block')
            setButtonValue('cancel selection')
        } else {
            props.showCheckboxes('none')
            setButtonValue('choose to buy')
        }
    }

    return (
        <div className='payNav'>
            <button className={'payNav__btn'} onClick={showChoice}>{buttonValue}</button>
            <button className={'payNav__btn'}>buy everything</button>
            { props.amount > 1 ? <div className={'payNav__amount'}>amount payable: <span>{props.amount}$</span></div> : '' }
        </div>
    );
}

export default PayNavigation;