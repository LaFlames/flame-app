import { StoryFn } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (Story: StoryFn) => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
};
