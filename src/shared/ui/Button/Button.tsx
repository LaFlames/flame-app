import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
    className,
    theme = ButtonTheme.CLEAR,
    children,
    ...rest
}) => {
    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};
