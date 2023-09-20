import type { Meta, StoryObj } from '@storybook/angular';
import { TextColorPickerDropdownComponent } from 'src/color/color-picker/color-picker-dropdown.component';
import { TextColorModel, TextColorUpdateType } from 'src/color/model/text-color.model';
import { ColorModel } from 'src/color/model/color.model';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TextColorPickerDropdownComponent> = {
  title: 'Color/Picker',
  component: TextColorPickerDropdownComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TextColorPickerDropdownComponent>;

const textModel = new TextColorModel(
    TextColorUpdateType.Font, 
    [new ColorModel('#A4A5A7', false)]
    );
// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const ColorPicker: Story = {
  args: {
    text: textModel,
    titleKey: 'test',
  },
};

