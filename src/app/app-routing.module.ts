import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { AuthGuardService } from './auth-guard.service';
import { FooterComponent } from './common/footer/footer.component';
import { BranchdetailsComponent } from './view/branchdetails/branchdetails.component';
import { RoleComponent } from './view/role/role.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: SidenavComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'branchdetails',
        component: BranchdetailsComponent
      },
      {
        path: 'rolecreation',
        component: RoleComponent
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
