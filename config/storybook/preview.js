import { addDecorator } from '@storybook/react';
import { ThemeEnum } from '../../src/app/providers';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/configs/storybook';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
