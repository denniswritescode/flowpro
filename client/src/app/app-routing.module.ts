import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrameComponent } from './frame/frame.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { IncomeCreateComponent } from './pages/income/income-create/income-create.component';


const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    children: [
      {
        path: '',
        component: ActionsComponent,
      },
      {
        path: 'income/create',
        component: IncomeCreateComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
