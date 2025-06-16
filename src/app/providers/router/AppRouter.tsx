import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/router/lib/routeConfig';

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="pageContent">{element}</div>}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
