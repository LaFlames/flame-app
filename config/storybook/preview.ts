import type { Preview } from '@storybook/react-webpack5';
import { RouteDecorator, ThemeDecorator } from 'shared/lib/storybook';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import '../../src/app/styles/index.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [ThemeDecorator(ThemeEnum.LIGHT), RouteDecorator],
};

export default preview;
