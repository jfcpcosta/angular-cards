import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardFormComponent } from './containers/card-form/card-form.component';


const routes: Routes = [
  { path: ':id/edit', component: CardFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
