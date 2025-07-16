import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Button } from 'shared/ui';
import { LanguageSwitcher } from '../LanguageSwitcher';

interface SidebarProps {
    className?: string;
    toggleCollapse: () => void;
}

const Sidebar = ({ className, toggleCollapse }: SidebarProps) => {
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, {}, [className])}
        >
            <Button onClick={toggleCollapse}>toggle</Button>
            <div className={cls.switcherWrapper}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
