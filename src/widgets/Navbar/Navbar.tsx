import {classNames} from "shared/lib";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui";
import {ThemeSwitcher} from "../ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.switcherWrapper}>
                <ThemeSwitcher />
            </div>
            <AppLink to='/'>Main</AppLink>
            <AppLink to='/about'>About</AppLink>
        </div>
    );
};

export default Navbar;