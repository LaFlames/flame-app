import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './appLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
     theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        children, to, theme = AppLinkTheme.PRIMARY, className, ...rest
    } = props;

    return (
        <Link
            {...rest}
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};
