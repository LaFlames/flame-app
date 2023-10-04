import React from 'react';
import {ThemeContext, ThemeEnum} from "./ThemeContext";

const defaultTheme = localStorage.getItem('theme') || 'light';

const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = React.useState<ThemeEnum>(defaultTheme as ThemeEnum)

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;