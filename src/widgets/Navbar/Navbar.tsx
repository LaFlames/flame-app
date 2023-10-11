import { classNames } from 'shared/lib';
import React from 'react';
import { AppLink, LinkTheme } from 'shared/components';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <AppLink theme={LinkTheme.SECONDARY} to="/">Main</AppLink>
        <AppLink theme={LinkTheme.SECONDARY} to="/about">About</AppLink>
    </div>
);
