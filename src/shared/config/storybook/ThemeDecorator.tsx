import { StoryFn } from '@storybook/react-webpack5';
import { ThemeEnum } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ThemeEnum) => (Story: StoryFn) => {
    return (
        <div className={`app ${theme} storybookDisplay`}>
            <Story />
        </div>
    );
};
