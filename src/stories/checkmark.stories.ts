import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { CheckmarkComponent } from 'src/checkmark/checkmark.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CheckmarkComponent> = {
  title: 'Basic/Checkmark',
  component: CheckmarkComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="width: 25%; height: 25%">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<CheckmarkComponent>;


// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Checkmark: Story = {
};
