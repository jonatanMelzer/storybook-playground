import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { ColorPickerDropdownComponent } from 'src/color/color-picker/color-picker-dropdown.component';
import { ColorUpdateModel, ColorUpdateType } from 'src/color/model/color-update.model';
import { ColorModel } from 'src/color/model/color.model';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ColorPickerDropdownComponent> = {
  title: 'Color/Picker',
  component: ColorPickerDropdownComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin-left: 10em">${story}</div>`)
  ]
};

export default meta;
type Story = StoryObj<ColorPickerDropdownComponent>;

const model = new ColorUpdateModel(
    ColorUpdateType.Font, 
    [new ColorModel('#A4A5A7', true), new ColorModel('#00000', false)]
    );
// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const ColorPicker: Story = {
  args: {
    model: model,
    label: 'Color',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000' },
      ],
    },
  },
};
