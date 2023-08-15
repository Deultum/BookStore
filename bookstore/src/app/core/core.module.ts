import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {  FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class CoreModule { }
