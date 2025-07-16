import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    return <div className={classNames(cls.navbar, {}, [className])}></div>;
};

export default Navbar;
