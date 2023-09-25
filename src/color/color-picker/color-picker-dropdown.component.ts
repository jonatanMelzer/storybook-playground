import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IColorThemeModel } from '../model/color-theme.model';
import { IColorModel } from '../model/color.model';
import { ColorUpdateModel, ColorUpdateType } from '../model/color-update.model';
import { ColorsGridComponent } from '../colors-grid/colors-grid.component';
import { ColorsThemeGridComponent } from '../colors-theme-grid/colors-theme-grid.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-color-picker-dropdown',
  templateUrl: './color-picker-dropdown.component.html',
  styleUrls: ['./color-picker-dropdown.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ColorsGridComponent, 
    ColorsThemeGridComponent, 
    NgbDropdownModule,
    MatIconModule
  ],
})
export class ColorPickerDropdownComponent implements OnInit, OnChanges {
  @Input() model!: ColorUpdateModel;
  @Input() label: string = '';
  @Output() selected = new EventEmitter<IColorModel | IColorThemeModel>();

  protected ColorUpdateType = ColorUpdateType;
  protected selectedColor: IColorModel | undefined;
  protected selectedTheme: IColorThemeModel | undefined;
  protected arrowUp: boolean = false;
  protected style: string = '';

  ngOnInit(): void {
    this.setSelectedColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['model']) {
      this.setSelectedColor();
    }
  }

  protected onOpenChange(isOpened: boolean) {
    this.arrowUp = isOpened;
  }

  protected onSelectedColor(color: IColorModel | IColorThemeModel) {
    switch(this.model.updateType){
      case ColorUpdateType.Font:
        this.selectedColor = color;
        break;
      case ColorUpdateType.Theme:
        this.selectedTheme = color as IColorThemeModel;
        break;
    }
    this.selected.emit(color);
  }

  private setSelectedColor() {
    switch(this.model.updateType){
      case ColorUpdateType.Font:
        this.selectedColor = (this.model.colors as IColorModel[]).find(c => c.isSelected);
        break;
      case ColorUpdateType.Theme:
        this.selectedTheme = (this.model.colors as IColorThemeModel[]).find(c => c.isSelected);
        break;
    }
  }
}
