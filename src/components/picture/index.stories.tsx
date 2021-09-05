import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Picture } from './';

export default {
    title: 'Components/Picture',
    component: Picture,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => (
    <Picture {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    src:
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    alt: 'googleロゴ',
    caption: 'googleロゴ',
};
