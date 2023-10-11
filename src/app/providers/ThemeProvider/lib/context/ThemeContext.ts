import { Dispatch, SetStateAction, createContext } from 'react';

export enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface IThemeContext {
    theme?: ThemeEnum;
    setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
}

export const ThemeContext = createContext<IThemeContext>({});
