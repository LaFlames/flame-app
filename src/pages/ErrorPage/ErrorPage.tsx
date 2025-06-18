import { classNames } from 'shared/lib';
import cls from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

interface ErrorPageProps {
    className?: string;
}

const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};

export default ErrorPage;
