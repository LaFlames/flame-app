import {classNames} from "shared/lib";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink to='/'>Main</AppLink>
            <AppLink to='/about'>About</AppLink>
        </div>
    );
};

export default Navbar;