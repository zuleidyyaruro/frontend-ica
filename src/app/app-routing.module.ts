import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  {
    path: '',
    component: UploadFileComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
