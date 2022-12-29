import React from 'react';
import './Main.css'
import ProductList from "../ProductList/ProductList";
import Basket from "../Basket/Basket";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


let totalPages: number


function Main() {
    return (

        <div className='main'>
            <div className="container">
                <div className="main__inner">
                    <Routes>
                        <Route
                            path='/products/*'
                            element={<ProductList />}
                        />
                        <Route
                            path='/basket'
                            element={<Basket/>}
                        />
                        <Route
                            path = {`products/:id`}
                            element={<ProductCard />}
                        />
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default Main;