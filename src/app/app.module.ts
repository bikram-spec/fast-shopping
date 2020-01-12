import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Design1Component } from './design1/design1.component';
import { IconsComponent } from './icons/icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/Material/input';
import {MatSliderModule} from '@angular/material/slider'
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    Design1Component,
    IconsComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
