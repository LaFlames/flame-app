import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { ThemeIcon } from 'shared/assets/icons';
import { Button } from 'shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { changeTheme } = useTheme();

    return (
        <Button
            onClick={changeTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            <ThemeIcon className={cls.themeIcon} />
        </Button>
    );
};

export default ThemeSwitcher;
