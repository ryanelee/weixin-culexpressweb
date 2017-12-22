import { LoginModule } from './routes/login/login.module';
import { LayoutModule } from './layout/layout.module';
import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { LayoutModule } from './layout/layout.module.ts';
import {AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BaseCodePipe } from './shared/base-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BaseCodePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    LoginModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
