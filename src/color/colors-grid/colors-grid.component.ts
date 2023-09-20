import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorModel } from '../model/color.model';
import { ColorButtonComponent } from '../color-button/color-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colors-grid',
  templateUrl: './colors-grid.component.html',
  styleUrls: ['./colors-grid.component.scss'],
  standalone: true,
  imports:[CommonModule, ColorButtonComponent]
})
export class ColorsGridComponent {
  @Input() colors: Array<ColorModel> | undefined;
  @Output() selected = new EventEmitter<ColorModel>();

  protected select(selected: ColorModel): void {
    this.colors?.forEach(c => {
      if (c.color === selected.color) {
        c.isSelected = true;
      }
      else {
        c.isSelected = false;
      }
    });

    this.selected.emit(selected);
  }
}
