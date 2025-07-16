import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Button } from 'shared/ui';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
    toggleCollapse: () => void;
}

const Sidebar = ({ className, toggleCollapse }: SidebarProps) => {
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, {}, [className])}
        >
            <Button onClick={toggleCollapse}>{t('toggle')}</Button>
            <div className={cls.switcherWrapper}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
