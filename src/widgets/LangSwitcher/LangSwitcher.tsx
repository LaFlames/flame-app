import React from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/components';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            className={className}
            onClick={changeLanguage}
            theme={ButtonTheme.CLEAR}
            size={ButtonSize.L}
        >
            {t('lng')}
        </Button>
    );
};
