import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardFormComponent } from './containers/card-form/card-form.component';


@NgModule({
  declarations: [CardFormComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CardsModule { }
