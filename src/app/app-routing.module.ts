import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientComponent } from './client/list-client/list-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ClientRegisterComponent } from './client/client-register/client-register.component';

import { ClientComponent } from './client/show-client/client.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './menu/login/login.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'client/home',component:MenuComponent},
  {path:'client/list', component: ListClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent},
  {path: 'client/show/:id', component: ClientComponent},
  {path:'client/register',component:ClientRegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
