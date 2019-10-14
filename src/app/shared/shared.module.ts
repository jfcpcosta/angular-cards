import { NgModule } from "@angular/core";

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSnackBarModule,
  MatSlideToggleModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class SharedModule {}
