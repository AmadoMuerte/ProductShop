import React from 'react';
import './SearchPanel.css'
function SearchPanel() {
    return (
        <div className='searchPanel'>
            <input className='searchPanel__input' type="text"/>
            <button className='searchPanel__button'>=</button>
            <button className='searchPanel__button'>ok</button>
        </div>
    );
}

export default SearchPanel;