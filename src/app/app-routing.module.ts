import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ZasrantsyComponent } from './zasrantsy/zasrantsy.component';
import { ZasranetsDetailComponent }  from './zasranets-detail/zasranets-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'zasrantsy', component: ZasrantsyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ZasranetsDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
