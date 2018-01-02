import { AuthService } from '../../shared/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatInputModule, MatSelectModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LayoutModule } from '../../layout/layout.module';
import { StorageService } from 'app/shared/storage.service';

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
    MatFormFieldModule
  ],
  providers: [AuthService, StorageService],
  declarations: [LoginComponent]
})
export class LoginModule { }
