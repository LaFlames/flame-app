import {classNames} from "shared/lib";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

enum AppLinkTheme {
    "PRIMARY" = "primary",
    "SECONDARY" = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink = ({className, theme = AppLinkTheme.PRIMARY, to, children}: AppLinkProps) => {
     return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};

export default AppLink;