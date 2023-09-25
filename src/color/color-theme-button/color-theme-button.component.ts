import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorThemeModel } from '../model/color-theme.model';
import { CommonModule } from '@angular/common';
import { CheckmarkComponent } from 'src/checkmark/checkmark.component';

@Component({
  selector: 'app-color-theme-button',
  templateUrl: './color-theme-button.component.html',
  styleUrls: ['./color-theme-button.component.scss'],
  standalone: true,
  imports: [CommonModule, CheckmarkComponent]
})
export class ColorThemeButtonComponent {
  @Input() color: ColorThemeModel | undefined;
  @Input() text = 'Aa';
  @Output() selected = new EventEmitter<ColorThemeModel>();
}
