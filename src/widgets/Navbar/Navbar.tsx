import {classNames} from "shared/lib";
import cls from './navbar.module.scss';
import React from "react";
import {AppLink} from "shared/components";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink to='/'>Main</AppLink>
            <AppLink to='/about'>About</AppLink>
        </div>
    );
};