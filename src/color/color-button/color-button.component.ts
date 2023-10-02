import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckmarkComponent } from 'src/checkmark/checkmark.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CheckmarkComponent]
})
export class ColorButtonComponent {
   /**
   * Background color of button
   */
  @Input() color: string = '#000';
     /**
   * Selected State
   */
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<string>();
}
