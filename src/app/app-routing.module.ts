import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { UpdateMyDataComponent } from './pages/my-account/update-my-data/update-my-data.component'
import { DasboardComponent } from './pages/dasboard/dasboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/my-account',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DasboardComponent,
    children: [
      {
        path: 'my-account',
        component: MyAccountComponent,
      },
      {
        path: 'my-account/update-data',
        component: UpdateMyDataComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
