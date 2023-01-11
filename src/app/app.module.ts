import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PatternValidateComponent } from './pattern-validate/pattern-validate.component';
import { StrengthBarComponent } from './strength-bar/strength-bar.component';
import { StrengthCheckerComponent } from './strength-bar/strength-checker.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    PatternValidateComponent,
    StrengthBarComponent,
    StrengthCheckerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
