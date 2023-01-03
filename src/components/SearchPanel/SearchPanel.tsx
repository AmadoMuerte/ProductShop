import React from 'react';
import './SearchPanel.css'

const SearchPanel = () => {
    return (
        <div className='searchPanel'>
            <input type="text" className="searchPanel__item" placeholder='Type product name here'/>
            <button className="searchPanel__button">
                Search
            </button>
        </div>
    );
};

export default SearchPanel;