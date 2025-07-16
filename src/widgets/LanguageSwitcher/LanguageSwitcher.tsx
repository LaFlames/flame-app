import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLng = async () =>
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

    return (
        <div>
            <Button onClick={toggleLng} theme={ButtonTheme.SOLID}>
                {t('Language')}
            </Button>
        </div>
    );
};

export default LanguageSwitcher;
