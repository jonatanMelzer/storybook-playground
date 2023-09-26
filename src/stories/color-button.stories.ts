import { Meta, StoryObj } from '@storybook/angular';
import { ColorButtonComponent } from 'src/color/color-button/color-button.component';
import { ColorModel } from 'src/color/model/color.model';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ColorButtonComponent> = {
  title: 'Color/Button',
  component: ColorButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ColorButtonComponent>;

const color = new ColorModel('#95C533', false);
;
// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const ColourButton: Story = {
  args: {
    color: color,
    isSelected: false,
  }
};
