import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private readonly http: HttpClient) {}

  private readonly apiEvcBasePath = environment.apis.file.basePath;
  private readonly uploadFilePath = environment.apis.file.uploadFilePath;
  private readonly getProcessPath = environment.apis.file.getProcessPath;

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiEvcBasePath}${this.uploadFilePath}`, formData);
  }

  getProcess(municipality: string): Observable<any> {
    return this.http.get<any>(`${this.apiEvcBasePath}${this.getProcessPath}/${municipality}`);
  }
}
