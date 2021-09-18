import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'カードのタイトル',
    url: 'http://www.google.com',
    image: {
        src: 'https://placehold.jp/150x150.png',
        alt: '説明分',
        caption: 'カード画像のキャプション',
    }

};
