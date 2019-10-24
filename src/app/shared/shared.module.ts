import { NgModule } from "@angular/core";

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatProgressBarModule
} from "@angular/material";
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatProgressBarModule
  ],
  exports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatProgressBarModule,
    FileUploadComponent
  ]
})
export class SharedModule {}
