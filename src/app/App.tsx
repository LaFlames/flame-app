import React from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';
import { useTheme } from './providers';
import { RouterProvider } from './providers/RouterProvider';

function App() {
    const { theme } = useTheme();

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
}

export default App;
