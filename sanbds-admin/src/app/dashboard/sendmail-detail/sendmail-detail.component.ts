import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendMail } from 'app/_models/sendmail.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendmailService } from '../sendmail.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sendmail-detail',
  templateUrl: './sendmail-detail.component.html',
  styleUrls: ['./sendmail-detail.component.scss']
})
export class SendmailDetailComponent implements OnInit {

  sub: Subscription;
  sendmailDetail: SendMail;
  sendmailForm: FormGroup;
  returnSendmailForm: FormGroup;
  isShowForm = false;
  showform = true;
  trangthai: number;

  constructor(
    private  sendmailService: SendmailService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.sendmailForm = this.fb.group({
      id: [null],
      name: [null],
      email: [null],
      phone: [null],
      thongtinthem: [true],
      ngayhen: [true]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.sub = this.sendmailService.getSendMailById(id).subscribe(
      data => {
        this.sendmailDetail = data,
          this.sendmailForm.patchValue(this.sendmailDetail);
      });
  }

  showForm() {
    this.isShowForm = !this.isShowForm;
    this.returnSendmailForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [this.sendmailDetail.email, [Validators.required]],
      ngayhen:[null],
      thongtinthem: [null],
      trangthai: [true],
    });
  }
  back() {
    this.location.back();
  }

  // onSubmit() {
  //   let query = this.returnSendmailForm.value;
  //   this.sendmailService.createReturnSendmail(query).subscribe(
  //     data => { }
  //   );
  //   this.onUpdateStaus();
  // }

  // onUpdateStaus() {
  //   this.sub = this.sendmailService.updateStatus(this.sendmailForm.value, this.sendmailDetail.id)
  //     .subscribe(
  //       data => {
  //         this.toastr.success("Phản hồi thành công");
  //         err => this.toastr.error("Xảy ra lỗi")
  //       })
  // }
}
