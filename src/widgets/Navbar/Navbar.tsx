import { classNames } from 'shared/lib/classNames';
import React from 'react';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])} />
);
