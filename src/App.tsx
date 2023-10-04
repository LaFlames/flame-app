import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, MainPage} from "./pages";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </React.Suspense>
        </div>
    );
};

export default App;