import React from 'react';
import { ThemeEnum, ThemeContext } from '../context/ThemeContext';


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