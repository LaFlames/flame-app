import { classNames } from 'shared/lib';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
