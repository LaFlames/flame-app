import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

const Button = ({
    className,
    theme = ButtonTheme.CLEAR,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...rest}
        ></button>
    );
};

export default Button;
