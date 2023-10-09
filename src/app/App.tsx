import React from 'react';
import "./styles/index.scss";
import {classNames} from "shared/lib";
import {useTheme} from "./providers";
import {Navbar, ThemeSwitcher} from "widgets";
import {RouterProvider} from './providers/RouterProvider';


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <ThemeSwitcher />
            <RouterProvider />
        </div>
    );
};

export default App;