import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './noteFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('notFound')}
        </div>
    );
};
