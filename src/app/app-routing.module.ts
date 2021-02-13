import { AuthGuard } from './components/auth.guard';
import { InfoUserGuard } from './info-user.guard';
import { ListComponent } from './components/list/list.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListComponent, canActivate: [InfoUserGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'sing-up', component: SingUpComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
