import {classNames} from "shared/lib";
import cls from './navbar.module.scss';
import React from "react";
import {AppLink, LinkTheme} from "shared/components";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink theme={LinkTheme.SECONDARY} to='/'>Main</AppLink>
            <AppLink theme={LinkTheme.SECONDARY} to='/about'>About</AppLink>
        </div>
    );
};