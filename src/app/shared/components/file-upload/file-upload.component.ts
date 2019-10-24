import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UploadService } from '../../../core/services/upload.service';

@Component({
  selector: 'ac-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FileUploadComponent), multi: true}]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {

  progress: number;
  mode: string = 'none';
  previewImage: string;

  private files: File[];
  private fileReader: FileReader;
  private uploadedFileName: string;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.fileReader = new FileReader();
    this.fileReader.addEventListener("load", (event: any) => {
      this.previewImage = event.target.result;
    }, false);
  }

  onFileChange(event): void {
    this.upload(event.target.files);
  }

  private upload(files: FileList): void {
    this.files = [files.item(0)];
    this.fileReader.readAsDataURL(this.files[0]);

    this.files.forEach(file => {
      // upload
      this.uploadService.upload(file).subscribe((data: any) => {
        console.log(data);
        switch (data.status) {
          case 'complete':
            this.mode = 'none';
            this.uploadedFileName = data.message;
            this.onChange(data.message);
            break;
          case 'progress':
            this.progress = data.message;
            this.mode = this.progress < 100 ? 'determinate' : 'indeterminate';
            break;
        }
      });
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.uploadedFileName = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {

  }
}
