import { classNames } from 'shared/lib';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLng = () =>
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

    return (
        <div className={classNames(cls.switcher, {}, [className])}>
            <Button onClick={toggleLng}>{t('Language')}</Button>
        </div>
    );
};

export default LanguageSwitcher;
