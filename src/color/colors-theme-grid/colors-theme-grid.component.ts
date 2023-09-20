import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorThemeModel } from '../model/color-theme.model';
@Component({
  selector: 'app-colors-theme-grid',
  templateUrl: './colors-theme-grid.component.html',
  styleUrls: ['./colors-theme-grid.component.scss'],
  standalone: true,
})
export class ColorsThemeGridComponent {
  @Input() colors: Array<ColorThemeModel> | undefined;
  @Output() selected = new EventEmitter<ColorThemeModel>();

  protected select(selected: ColorThemeModel): void {
    this.colors?.forEach(c => {
      if (c.color === selected.color && c.backgroundColor === selected.backgroundColor) {
        c.isSelected = true;
      }
      else {
        c.isSelected = false;
      }
    });

    this.selected.emit(selected);
  }
}
