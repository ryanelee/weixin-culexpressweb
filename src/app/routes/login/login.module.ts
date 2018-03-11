import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatStepperModule,
  MatListModule
} from '@angular/material';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LayoutModule } from 'app/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatListModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
