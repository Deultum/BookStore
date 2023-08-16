import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthService } from '../auth.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CatalogModule { }
