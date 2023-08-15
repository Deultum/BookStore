import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { CreateBookComponent } from './books/create-book/create-book.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ReadBookComponent } from './books/read-book/read-book.component';
import { AuthActivate } from './core/guards/auth.activate';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthActivate] },
  { path: 'catalog', component: CatalogComponent },
  { path: 'create', component: CreateBookComponent, canActivate: [AuthActivate] },
  { path: 'edit/:id', component: EditBookComponent, canActivate: [AuthActivate] },
  { path: 'read/:id', component: ReadBookComponent,canActivate: [AuthActivate] },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
