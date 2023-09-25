import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { ColorPickerDropdownComponent } from 'src/color/color-picker/color-picker-dropdown.component';
import { ColorModel } from 'src/color/model/color.model';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ColorPickerDropdownComponent> = {
  title: 'Color/Picker',
  component: ColorPickerDropdownComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin-left: 10em">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<ColorPickerDropdownComponent>;

const colors = 
    [
      new ColorModel('#FFE4C4', false), 
      new ColorModel('#FA9ACD', false),
      new ColorModel('#DB7093', false),
      new ColorModel('#FF00FF', false),
      new ColorModel('#C71585', false),
      new ColorModel('#800080', false),
      new ColorModel('#4B1182', false),
      new ColorModel('#CBE399', true),
      new ColorModel('#9ACC9A', false),
      new ColorModel('#95C533', false),
    ];
// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const ColorPicker: Story = {
  args: {
    colors: colors,
    label: 'Color',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#363636' },
      ],
    },
  },
};
