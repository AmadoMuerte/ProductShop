import React from 'react';
import './CategorySelect.css'

function CategorySelect() {
    return (
        <div className='categorySelect'>
            <p>Category</p>
            <select className='categorySelect__select'>
                <option>men's clothing</option>
                <option>jewelery</option>
                <option>Mans</option>
                <option>Mans</option>
                <option>Mans</option>
            </select>
        </div>
    );
}

export default CategorySelect;