import React from 'react';
import { ThemeEnum, useTheme } from 'app/providers';
import DarkIcon from 'shared/assets/theme-dark.svg';
import LightIcon from 'shared/assets/theme-light.svg';
import { Button } from 'shared/components';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={className} onClick={toggleTheme}>
            {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
