import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/providers/router/lib/routeConfig";

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({path, element}) => <Route path={path} element={element}/>)}
        </Routes>
    );
};

export default AppRouter;