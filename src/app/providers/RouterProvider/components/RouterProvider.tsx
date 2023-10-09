import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from '../lib/routeConfig/routeConfig';


const RouterProvider: React.FC = () => {
    console.log(Object.values(routeConfig))
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(
                    route => <Route key={route.path} path={route.path} element={route.element}/>
                )}
            </Routes>
        </React.Suspense>
    )
};

export default RouterProvider;