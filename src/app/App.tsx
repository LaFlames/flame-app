import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar, Sidebar } from 'widgets';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from 'pages';

const App = () => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <Suspense fallback="">
            <ErrorBoundary fallback={<ErrorPage />}>
                <div
                    className={classNames(
                        'app',
                        { collapsedSidebar: collapsed },
                        [theme]
                    )}
                >
                    <Navbar />
                    <Sidebar
                        collapsed={collapsed}
                        toggleCollapse={toggleCollapse}
                    />
                    <AppRouter />
                </div>
            </ErrorBoundary>
        </Suspense>
    );
};

export default App;
