import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files/files.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  constructor(private readonly filesService: FilesService) { }

  loadFiles(file: File[]) {
    const formData = new FormData();
    formData.append('file', file[0], file[0].name);
    this.filesService.uploadFile(formData).subscribe({
      next: () => {
        console.log("Cargado")
      },
      error: () =>{
        console.log("error")
      }
    })
  }

  listenerMaxFiles(archivos: any) {
    console.log(archivos);
  }

}
