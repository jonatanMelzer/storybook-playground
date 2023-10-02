import { Meta, StoryObj } from '@storybook/angular';
import { CheckmarkComponent } from 'src/checkmark/checkmark.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CheckmarkComponent> = {
  title: 'Basic/Checkmark',
  component: CheckmarkComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CheckmarkComponent>;


// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Checkmark: Story = {

};
