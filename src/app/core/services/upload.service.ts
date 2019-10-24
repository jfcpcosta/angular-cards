import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  public upload(file: File) {
    const formData = new FormData();
    formData.append("file", file, file.name);

    return this.http.post<any>('/cards/upload', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const progress = Math.round(100 * event.loaded / event.total);
            return {
              status: 'progress',
              message: progress
            };
          case HttpEventType.Response:
            return {
              status: 'complete',
              message: event.body
            }
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }
}
