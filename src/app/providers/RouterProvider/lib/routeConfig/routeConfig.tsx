import { AppRouter, RoutePaths } from 'shared/types';
import * as Pages from 'pages';
import { RouteProps } from 'react-router-dom';

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePaths.main,
        element: <Pages.MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RoutePaths.about,
        element: <Pages.AboutPage />,
    },
    [AppRouter.NOT_FOUND]: {
        path: RoutePaths['not-found'],
        element: <Pages.NotFoundPage />,
    },
};
