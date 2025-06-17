import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/router/lib/routeConfig';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="pageContent">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
