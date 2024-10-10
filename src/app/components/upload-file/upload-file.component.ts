import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  metodoParaCogerLosArchivos(archivos: FileList) {
    console.log(archivos);
  }

  listenerMaxFiles(archivos: any) {
    console.log(archivos);
  }

}
