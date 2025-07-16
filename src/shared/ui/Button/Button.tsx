import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    SOLID = 'solid',
}

export enum ButtonSizes {
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSizes;
}

export const Button: FC<ButtonProps> = ({
    className,
    theme = ButtonTheme.CLEAR,
    size = ButtonSizes.MD,
    children,
    ...rest
}) => {
    return (
        <button
            className={classNames(cls.button, {}, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...rest}
        >
            {children}
        </button>
    );
};
