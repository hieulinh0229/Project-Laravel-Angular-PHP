import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedbackService } from '../feedback.service';
import { Feedback } from 'app/_models/feedback.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss']
})
export class FeedbackDetailComponent implements OnInit {

  sub: Subscription;
  feedbackdetail: Feedback;
  feedback: Feedback;
  feedBackForm: FormGroup;
  returnfeedBackForm: FormGroup;
  isShowForm = false;
  showform = true;
  trangthai: number;

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,

  ) { }
  ngOnInit() {
    this.feedBackForm = this.fb.group({
      id: [null],
      tieude: [null],
      noidung: [null],
      email: [null],
      trangthai: [true]
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.sub = this.feedbackService.getFeedbackById(id).subscribe(
      data => {
        this.feedbackdetail = data,
          this.feedBackForm.patchValue(this.feedbackdetail);
      });
  }
  showForm() {
    this.isShowForm = !this.isShowForm;
    this.returnfeedBackForm = this.fb.group({
      tieude: [null, [Validators.required]],
      noidung: [null, [Validators.required]],
      email: [this.feedbackdetail.email, [Validators.required]],
      trangthai: [true]
    });
  }
  onSubmit() {
    let query = this.returnfeedBackForm.value;
    this.feedbackService.createReturnFeedBack(query).subscribe(
      data => { }
    );
    this.onUpdateStaus();
  }

  onUpdateStaus() {
    this.sub = this.feedbackService.updateStatus(this.feedBackForm.value, this.feedbackdetail.id)
      .subscribe(
        data => {
          this.toastr.success("Phản hồi thành công");
          err => this.toastr.error("Xảy ra lỗi")
        })
  }
}