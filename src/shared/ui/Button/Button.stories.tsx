import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/lib/storybook';
import { Button, ButtonSizes, ButtonTheme } from './Button';
import { ThemeEnum } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Solid: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.SOLID,
    },
};

export const SolidDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.SOLID,
    },
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ButtonSmall: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSizes.SM,
    },
};

export const ButtonLarge: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSizes.LG,
    },
};
