import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VacationsComponent } from './dashboard/pages/vacations/vacations.component';
import { ModerateComponent } from './dashboard/pages/moderate/moderate.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';
import { AuthGuard } from './_guards/auth.guard';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    // path: 'dashboard', component: MainNavComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'vacations', pathMatch: 'full' },
      { path: 'vacations', component: VacationsComponent },
      { path: 'moderate', component: ModerateComponent },
      { path: 'admin', component: AdminComponent },
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
