import { HomeComponent } from './src/app/shared/pages/home/home.component';
import { PageErrorComponent } from './src/app/shared/pages/page-error/page-error.component';
import { AboutComponent } from './src/app/shared/pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, children: [
    {path: ':username', component: AboutComponent},
  ]},
  {
    path: 'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(
      m => m.DashboardModule)
  },
  {path: '404', component: PageErrorComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
