import type { Meta, StoryObj, canvas } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    // 추가
    componentSubtitle: 'parameters-componentSubtitle은 이곳을 설명합니다.',
    docs: {
      description: {
        // 추가
        component: `parameters-docs-description-component는 이곳을 설명합니다.`,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      description: '여백의 크기를 설정합니다.',
      table: {
        type: { summary: 'SpacingVariant' },
      },
      control: {
        type: 'select',
        options: [5, 10, 15, 20, 30, 40, 50],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
  },
};
