import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './layout/menu/menu.component';
import { CarsModule } from './cars/cars.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LayoutModule,
    CarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
