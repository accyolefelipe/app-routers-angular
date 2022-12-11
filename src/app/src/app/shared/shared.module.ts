import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PageErrorComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
