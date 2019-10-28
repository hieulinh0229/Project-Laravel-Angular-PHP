import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  errorMsg: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router : Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      displayName: ['', [Validators.minLength(2), Validators.required]]
    })
  }

  signUp(){
    const { email, password, displayName } = this.signupForm.value
    this.authService.signUp(email, password, displayName).subscribe(
      resolve => {
        this.router.navigate(['chat']);
        this.toastr.success("Ban đăng ký thành công");
      },
      error => {
        this.errorMsg = error.message;
        this.toastr.error(error.message);
      }
    )
  }

}
