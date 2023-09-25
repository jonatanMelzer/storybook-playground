import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerDropdownComponent } from 'src/color/color-picker/color-picker-dropdown.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ColorPickerDropdownComponent  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
