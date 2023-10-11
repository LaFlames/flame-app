import { classNames } from 'shared/lib';
import React from 'react';
import { ThemeSwitcher, LangSwitcher } from 'widgets';
import cls from './sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button
                type="button"
                className={cls.toggleCollapseBtn}
                onClick={() => setCollapsed((prev) => !prev)}
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
