import React from 'react';
import './SearchPanel.css'
import BurgerBtn from "../BurgerBtn/BurgerBtn";
function SearchPanel() {
    return (
        <div className='searchPanel'>
            <input className='searchPanel__input' type="text" placeholder='Type product name'/>
            <div className="searchPanel__buttons">
                <button className='searchPanel__button'>ok</button>
                <BurgerBtn />
            </div>
        </div>
    );
}

export default SearchPanel;