import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ColorThemeModel } from '../../../model/color-theme.model';
import { ColorModel } from '../../../model/color.model';
import { TextColorUpdateType, TextColorModel } from '../../../model/text-color.model';

@Component({
  selector: 'app-text-color-picker-dropdown',
  templateUrl: './text-color-picker-dropdown.component.html',
  styleUrls: ['./text-color-picker-dropdown.component.scss']
})
export class TextColorPickerDropdownComponent implements OnInit, OnChanges {
  @Input() text: TextColorModel;
  @Input() titleKey: string;
  @Output() selected = new EventEmitter<ColorModel | ColorThemeModel>();

  protected TextColorUpdateType = TextColorUpdateType;
  protected selectedColor: ColorModel | ColorThemeModel;
  protected arrowUp: boolean;
  protected style: string;

  ngOnInit(): void {
    this.setSelectedColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.text) {
      this.setSelectedColor();
    }
  }

  protected onOpenChange(isOpened: boolean) {
    this.arrowUp = isOpened;
  }

  protected onSelectedColor(color: ColorModel | ColorThemeModel) {
    this.selectedColor = color;
    this.selected.emit(this.selectedColor);
  }

  private setSelectedColor() {
    this.selectedColor = this.text.colors.find(c => c.isSelected);
  }
}
