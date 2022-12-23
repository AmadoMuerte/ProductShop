import React from 'react';
import './Main.css'
import ProductList from "../ProductList/ProductList";

function Main() {
    return (
        <div className='main'>
            <div className="container">
                <div className="main__inner">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Main;