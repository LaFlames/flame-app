import React from 'react';
import "./styles/index.scss";
import {classNames} from "shared/lib";
import {useTheme} from "./providers";
import {Navbar} from "widgets";
import {RouterProvider} from './providers/RouterProvider';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <RouterProvider />
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;