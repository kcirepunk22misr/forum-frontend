import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'ajustes', component: UserEditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

// export const APP_ROUTING_PROVIDERS: any[] = [];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
