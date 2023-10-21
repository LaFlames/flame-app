import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets';
import { routeConfig } from '../lib/routeConfig/routeConfig';

const RouterProvider: React.FC = () => (
    <Routes>
        {Object.values(routeConfig).map(
            (route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={(
                        <React.Suspense fallback={<PageLoader />}>
                            <div className="pageContent">{route.element}</div>
                        </React.Suspense>
                    )}
                />
            ),
        )}
    </Routes>
);

export default RouterProvider;
