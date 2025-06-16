import { AppRoutes, RoutesPaths } from 'shared/types';
import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';

export const routeConfig: RouteProps[] = [
    { path: RoutesPaths[AppRoutes.MAIN], element: <MainPage /> },
    { path: RoutesPaths[AppRoutes.ABOUT], element: <AboutPage /> },
];
