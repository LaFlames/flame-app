import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    ThemeEnum,
} from './ThemeContext';

interface UseThemeReturn {
    theme: ThemeEnum;
    changeTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme =
            theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, changeTheme };
};
