import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets';
import { routeConfig } from '../lib/routeConfig/routeConfig';

const RouterProvider: React.FC = () => (
    <React.Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(
                (route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<div className="pageContent">{route.element}</div>}
                    />
                ),
            )}
        </Routes>
    </React.Suspense>
);

export default RouterProvider;
