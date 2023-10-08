export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePaths: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
}