import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorModel } from '../model/color.model';
import { CheckmarkComponent } from 'src/checkmark/checkmark.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss'],
  standalone: true,
  imports: [CommonModule, CheckmarkComponent]
})
export class ColorButtonComponent {
  @Input() color: ColorModel | undefined;
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<ColorModel>();
}
