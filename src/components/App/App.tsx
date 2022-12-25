import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Basket from "../Basket/Basket";
import ProductCard from "../ProductCard/ProductCard";

function App() {

    return (
    <BrowserRouter>
        <div className="app">
            <div className={'content'}>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<Main/>}
                    />
                    <Route
                        path = {`/products/:id`}
                        element={<ProductCard />}
                    />
                    <Route
                        path='/basket'
                        element={<Basket/>}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
