import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLocationComponent } from './form-location/form-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  declarations: [
    FormLocationComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  exports: [
    FormLocationComponent,
    UploadFileComponent
  ]
})
export class MiniFormModule { }
