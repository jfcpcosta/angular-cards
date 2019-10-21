import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppLayoutComponent } from './containers/app-layout/app-layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
