import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import './style.scss';
import {AboutPage, MainPage} from "./pages";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </React.Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;