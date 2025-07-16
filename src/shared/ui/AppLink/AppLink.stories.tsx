import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook';
import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ButtonTheme } from 'shared/ui/Button/Button';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: { children: 'Link', theme: AppLinkTheme.SECONDARY },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const SecondaryDark: Story = {
    args: { children: 'Link', theme: AppLinkTheme.SECONDARY },
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
