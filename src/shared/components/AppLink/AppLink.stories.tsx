import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers';
import { ThemeDecorator } from 'shared/configs/storybook';
import { AppLink, LinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: LinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: LinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: LinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: LinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
