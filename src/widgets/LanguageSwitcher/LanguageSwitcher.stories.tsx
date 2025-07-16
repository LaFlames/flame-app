import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/lib/storybook';
import LanguageSwitcher from './LanguageSwitcher';
import { ThemeEnum } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
