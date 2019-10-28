import { Component, OnInit,  } from '@angular/core';
import { SendmailService } from './sendmail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  name: string;
  email: string;
  phone: Text;
  thongtinthem: string;
  ngayhen: Date;
  form: FormGroup;
 
  constructor(
    private sendmaiService: SendmailService,
    private fb: FormBuilder,
    private router: Router,
    private location:Location,
    private toarst: ToastrService
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      thongtinthem: ['', [Validators.required, Validators.minLength(0)]],
      ngayhen: ['', [Validators.required]],
    })

  }
  sendMail() {
    let query = this.form.value;
    this.sendmaiService.sendmail(query).subscribe(
      data => (
        this.toarst.success('Gởi lịch hẹn thành công'),
        this.form.reset(),
        this.location.back()
      ),
      err=>this.toarst.error('Mất kết nối')
    )
  }
  comeback(){
    this.location.back();
  }
}