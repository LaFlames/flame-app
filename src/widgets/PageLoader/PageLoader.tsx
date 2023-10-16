import { classNames } from 'shared/lib/classNames';
import React from 'react';
import { Loader } from 'shared/components';
import cls from './pageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
