import React from 'react';
import './Main.css'
import ProductList from "../ProductList/ProductList";


let totalPages: number


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