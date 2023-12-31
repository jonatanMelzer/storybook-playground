import { Component } from '@angular/core';
import { ColorModel } from 'src/color/model/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storybook';

  colors = [new ColorModel('#A4A5A7', true), new ColorModel('#00000', false)];
}
