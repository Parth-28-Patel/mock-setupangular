import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, type Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'LipiSearch - Liquor',
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    LoginComponent,
  ],
  declarations: [],
  providers: [],
})
export class LoginModule {}
