import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { AppLink, Button } from 'shared/ui';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import { RoutesPaths } from 'shared/types';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface SidebarProps {
    className?: string;
    collapsed: boolean;
    toggleCollapse: () => void;
}

const Sidebar = ({ className, collapsed, toggleCollapse }: SidebarProps) => {
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.sidebar,
                {
                    [cls.collapsed]: collapsed,
                },
                [className]
            )}
        >
            <Button
                data-testid="toggleSidebar"
                onClick={toggleCollapse}
                className={cls.toggleCollapse}
                theme={ButtonTheme.SOLID}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.links}>
                <AppLink
                    to={RoutesPaths.main}
                    className={cls.link}
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                >
                    <MainIcon />
                    <span>{t('Main')}</span>
                </AppLink>
                <AppLink
                    to={RoutesPaths.about}
                    className={cls.link}
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                >
                    <AboutIcon />
                    <span>{t('About')}</span>
                </AppLink>
            </div>

            <div className={cls.switcherWrapper}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
