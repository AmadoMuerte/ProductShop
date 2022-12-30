import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import MainPage from "../MainPage/MainPage";

function App() {

    return (
    <BrowserRouter>
        <div className="app">
            <div className={'content'}>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<MainPage />}
                    />
                    <Route
                        path='*'
                        element={<Main/>}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
