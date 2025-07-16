import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/lib/storybook';
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

export const InvertedPrimary: Story = {
    args: { children: 'Link', theme: AppLinkTheme.INVERTED_PRIMARY },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const InvertedPrimaryDark: Story = {
    args: { children: 'Link', theme: AppLinkTheme.INVERTED_PRIMARY },
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
