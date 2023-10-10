import {classNames} from "shared/lib";
import cls from './sidebar.module.scss';
import React from "react";
import {ThemeSwitcher, LangSwitcher} from "widgets";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button className={cls.toggleCollapseBtn} onClick={() => setCollapsed(prev => !prev)}></button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};