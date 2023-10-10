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
            <React.Suspense fallback="">
                <Navbar />
                <div className="pageWrapper">
                    <Sidebar />
                    <RouterProvider />
                </div>
            </React.Suspense>
        </div>
    );
};

export default App;