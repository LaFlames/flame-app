import {createContext, Dispatch, SetStateAction} from "react";

export enum ThemeEnum {
    LIGHT = "light",
    DARK = "dark",
}

interface ThemeContext {
    theme?: ThemeEnum;
    setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
}

export const ThemeContext = createContext<ThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";