import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCodePipe } from './base-code.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BaseCodePipe],
  declarations: [BaseCodePipe]
})
export class PipesModule { }
