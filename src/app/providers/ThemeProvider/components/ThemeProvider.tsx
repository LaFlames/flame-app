import React from 'react';
import { ThemeEnum, ThemeContext } from '../lib/context/ThemeContext';

const defaultTheme = localStorage.getItem('theme') || 'light';

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState<ThemeEnum>(defaultTheme as ThemeEnum);

    const defaultProps = React.useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
