import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink to="/">{t('Main')}</AppLink>
            <AppLink to="/about">{t('About')}</AppLink>
        </div>
    );
};

export default Navbar;
