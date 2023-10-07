import React from 'react';
import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import * as Pages from "pages";
import {classNames} from "shared";
import {useTheme} from "./providers";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Pages.MainPage />} />
                    <Route path='/about' element={<Pages.AboutPage />} />
                </Routes>
            </React.Suspense>
        </div>
    );
};

export default App;