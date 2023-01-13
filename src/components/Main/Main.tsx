import React, {lazy, Suspense} from 'react';
import './Main.css'
import { Route, Routes } from "react-router-dom";

const ProductList = lazy(() => import('../ProductList/ProductList'))
const Basket = lazy(() => import("../Basket/Basket"))
const ProductCard = lazy(() => import("../Product/ProductCard/ProductCard"))

function Main() {
    return (

        <div className='main'>
            <div className="container">
                <div className="main__inner">
                    <Suspense fallback={<div>loading ...</div>}>
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
                    </Suspense>
                </div>
            </div>
        </div>

    );
}

export default Main;