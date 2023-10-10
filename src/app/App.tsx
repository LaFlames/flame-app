import React from 'react';
import "./styles/index.scss";
import {classNames} from "shared/lib";
import {useTheme} from "./providers";
import {Navbar, Sidebar} from "widgets";
import {RouterProvider} from './providers/RouterProvider';


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="pageWrapper">
                <Sidebar />
                <RouterProvider />
            </div>

        </div>
    );
};

export default App;