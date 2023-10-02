import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { ColorButtonComponent } from 'src/color/color-button/color-button.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ColorButtonComponent> = {
  title: 'Color/Button',
  component: ColorButtonComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="width: 25%; height: 25%">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<ColorButtonComponent>;


// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const ColourButton: Story = {
  args: {
    color: '#95C533',
    isSelected: false,
  }
};
