import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateService } from 'src/app/create-bds/service/create.service';
import { FeedBack } from '../feedback.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(
    private formBiulder: FormBuilder,
    private createService: CreateService,
    private toars : ToastrService
    
  ) { }
  public form: FormGroup
  public feedBack: FeedBack[] =[];

  ngOnInit() {

    this.form = this.formBiulder.group({
      tieude: [null, [Validators.required]],
      noidung: [null,[Validators.required]],
      email: [null,[Validators.required]],
      trangthai: [false]
    })
  }
  onSubmit(){
      let query = this.form.value;
      this.createService.createFeedBack(query).subscribe(
        data=>{   
       this.form.reset() ;
       this.toars.success('Cám ơn bạn đã phản hồi')
        }
      )
    }
  }
