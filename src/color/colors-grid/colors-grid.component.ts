import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IColorModel } from '../model/color.model';
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
  @Input() colors: Array<IColorModel> | undefined;
  @Output() selected = new EventEmitter<IColorModel>();

  protected select(selectedColor: IColorModel): void {
    const formerSelected = (this.colors?.find(c => c.isSelected));
    if(formerSelected){
      formerSelected.isSelected = false;
    }
    selectedColor.isSelected = true;

    this.selected.emit(selectedColor);
  }
}
