import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ColorThemeModel } from '../model/color-theme.model';
import { ColorModel } from '../model/color.model';
import { TextColorModel, TextColorUpdateType } from '../model/text-color.model';
import { ColorsGridComponent } from '../colors-grid/colors-grid.component';
import { ColorsThemeGridComponent } from '../colors-theme-grid/colors-theme-grid.component';

@Component({
  selector: 'app-color-picker-dropdown',
  templateUrl: './color-picker-dropdown.component.html',
  styleUrls: ['./color-picker-dropdown.component.scss'],
  standalone: true,
  imports: [ColorsGridComponent, ColorsThemeGridComponent],
})
export class TextColorPickerDropdownComponent implements OnInit, OnChanges {
  @Input() text!: TextColorModel;
  @Input() titleKey: string = '';
  @Output() selected = new EventEmitter<ColorModel | ColorThemeModel>();

  protected TextColorUpdateType = TextColorUpdateType;
  protected selectedColor: ColorModel | ColorThemeModel | undefined;
  protected arrowUp: boolean = false;
  protected style: string = '';

  ngOnInit(): void {
    this.setSelectedColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
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
