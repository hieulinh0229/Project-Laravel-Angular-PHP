import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLocationComponent } from './form-location/form-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UpdateImageComponent } from './update-image/update-image.component';
import { MatModule } from 'app/_materials/mat.module';
import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  declarations: [
    FormLocationComponent,
    UploadFileComponent,
    UpdateImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    FileUploadModule
  ],
  exports: [
    FormLocationComponent,
    UploadFileComponent,    
    UpdateImageComponent
  ]
})
export class PartialsModule { }
