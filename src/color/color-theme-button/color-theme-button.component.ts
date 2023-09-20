import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorThemeModel } from '../model/color-theme.model';

@Component({
  selector: 'app-color-theme-button',
  templateUrl: './color-theme-button.component.html',
  styleUrls: ['./color-theme-button.component.scss'],
  standalone: true,
})
export class ColorThemeButtonComponent {
  @Input() color: ColorThemeModel | undefined;
  @Input() text = 'Aa';
  @Output() selected = new EventEmitter<ColorThemeModel>();
}
