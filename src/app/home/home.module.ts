import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, type Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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
  ],
  declarations: [],
  providers: [],
})
export class LoginModule {}
