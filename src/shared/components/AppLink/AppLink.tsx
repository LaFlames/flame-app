import React from 'react';
import {classNames} from "shared/lib";
import cls from './appLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: LinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {children, to, theme = LinkTheme.PRIMARY, className, ...rest} = props;

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
