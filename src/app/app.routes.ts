import { Routes } from '@angular/router';

import { CallCompleReportComponent } from '../components/CC Reports/call-comple-report/call-comple-report.component';
import { CreateUserComponent } from '../components/ManageUser/create-user/create-user.component';
import { CreateAutoDailerComponent } from '../components/Dailar/create-auto-dailer/create-auto-dailer.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/Login/login/login.component';

export const routes: Routes = [
 { path: '', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'CallComReport', component: CallCompleReportComponent },
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'CreateAutoDailer', component: CreateAutoDailerComponent },
];
