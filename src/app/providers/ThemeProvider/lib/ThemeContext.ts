import { createContext, Dispatch, SetStateAction } from 'react';

export enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}

interface IThemeContext {
    theme?: ThemeEnum;
    setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
