import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderComponent, SpinnerComponent],
  exports: [HeaderComponent, FooterComponent, SpinnerComponent]
})
export class LayoutModule { }
