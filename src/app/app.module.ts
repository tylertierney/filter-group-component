import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterGroupComponent } from './components/filter-group/filter-group.component';
import { FilterComponent } from './components/filter-group/filter/filter.component';

@NgModule({
  declarations: [AppComponent, FilterGroupComponent, FilterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
