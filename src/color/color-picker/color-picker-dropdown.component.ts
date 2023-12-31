import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IColorModel } from '../model/color.model';
import { ColorsGridComponent } from '../colors-grid/colors-grid.component';
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
    NgbDropdownModule,
    MatIconModule
  ],
})
export class ColorPickerDropdownComponent implements OnInit, OnChanges {
  @Input() colors!: IColorModel[];
  @Input() label: string = '';
  @Output() selected = new EventEmitter<IColorModel>();

  protected selectedColor: IColorModel | undefined;
  protected isOpened: boolean = false;

  ngOnInit(): void {
    this.setSelectedColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['colors']) {
      this.setSelectedColor();
    }
  }

  protected onOpenChange(isOpened: boolean) {
    this.isOpened = isOpened;
  }

  protected select(color: IColorModel) {
    this.selectedColor = color;
    this.selected.emit(color);
  }

  private setSelectedColor() {
    this.selectedColor = this.colors.find(c => c.isSelected);
  }
}
