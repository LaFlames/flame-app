import React from "react";
import {ThemeContext, ThemeEnum} from "../context/ThemeContext";

interface UseThemeReturn {
    theme: ThemeEnum;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
    const {theme, setTheme} = React.useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return {theme, toggleTheme};
}