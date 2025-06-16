import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar, Sidebar } from 'widgets';

const App = () => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames('app', { collapsedSidebar: collapsed }, [
                theme,
            ])}
        >
            <Suspense fallback="Loading...">
                dsfsd
                <Navbar />
                <Sidebar
                    collapsed={collapsed}
                    toggleCollapse={toggleCollapse}
                />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
