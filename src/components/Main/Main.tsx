import React from 'react';
import './Main.css'
import ProductList from "../ProductList/ProductList";
import Basket from "../Basket/Basket";
import { Route, Routes } from "react-router-dom";
import ProductCard from "../Product/ProductCard/ProductCard";

function Main() {
    return (

        <div className='main'>
            <div className="container">
                <div className="main__inner">
                    <Routes>
                        <Route
                            path='/'
                            element={<ProductList />}
                        />
                        <Route
                            path='/basket'
                            element={<Basket/>}
                        />
                        <Route
                            path = {`/:id`}
                            element={<ProductCard />}
                        />
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default Main;