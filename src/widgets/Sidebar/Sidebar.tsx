import { classNames } from 'shared/lib/classNames';
import React from 'react';
import { ThemeSwitcher, LangSwitcher } from 'widgets';
import {
    AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme,
} from 'shared/components';
import { RoutePaths } from 'shared/types';
import AboutIcon from 'shared/assets/about-20-20.svg';
import MainIcon from 'shared/assets/main-20-20.svg';
import { useTranslation } from 'react-i18next';
import cls from './sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="toggle-sidebar"
                className={cls.toggleCollapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
                onClick={() => setCollapsed((prev) => !prev)}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePaths.main}
                    className={cls.linkItem}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePaths.about}
                    className={cls.linkItem}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
