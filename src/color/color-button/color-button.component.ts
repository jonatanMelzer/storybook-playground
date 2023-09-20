import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorModel } from '../model/color.model';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss']
})
export class ColorButtonComponent {
  @Input() color: ColorModel | undefined;
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<ColorModel>();
}
