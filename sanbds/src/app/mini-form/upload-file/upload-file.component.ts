import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  uploadForm: FormGroup;
  uploaded = [];

  @Output() bindToParent = new EventEmitter<string[]>();
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  uploadSubmit() {
    for (let i = 0; i < this.uploader.queue.length; i++) {
      let fileItem = this.uploader.queue[i]._file;
      if (fileItem.size > 10000000) {
        alert("Each File should be less than 10 MB of size.");
        return;
      }
    }

    let urlList = [];
    for (let j = 0; j < this.uploader.queue.length; j++) {
      let data = new FormData();
      let fileItem = this.uploader.queue[j]._file;
      console.log(fileItem.name);
      data.append('file', fileItem);
      data.append('fileSeq', 'seq' + j);
      data.append('dataType', this.uploadForm.controls.type.value);
      this.uploadFile(data).subscribe(
        data => {
          this.uploaded.push(data);
          urlList.push(data.url)
          console.log(this.uploaded);
        }
      );
    }
    this.bindToParent.emit(urlList);


  }

  uploadFile(data: FormData): Observable<any> {
    return this.http.post('http://localhost:8000/api/upload/images', data);
  }

  // deleteFile(name) : Observable<any> {
  //   const url = this.findUploadedUrl(name);
  //   if (url) {
  //     let deleteForm = new FormData();
  //     deleteForm.append('url',url);    
  //     deleteForm.append( 'dataType', this.uploadForm.controls.type.value);
  //     return this.http.delete('http://localhost:8000/api/upload/images', deleteForm);
  //   }
  // }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      document: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
  }

  removeItem(item) {
    // this.deleteFile(item._file.name).subscribe(
    //   data => console.log(data)
    // )
    item.remove();
  }

  findUploadedUrl(name: string) {
    for (let i = 0; i < this.uploaded.length; i++) {
      if (this.uploaded[i].name == name) {
        return this.uploaded[i].url;
      }
    }
    return false;
  }

}
