import { classNames } from 'shared/lib';
import cls from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
    className?: string;
}

const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.notFound, {}, [className])}>
            {t('Not found')}
        </div>
    );
};

export default NotFound;
