import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formRegister: FormGroup;  
  error : any;

  constructor(
    private formBuilder: FormBuilder,
     private authService: AuthService,
     private toastr: ToastrService,
     private router: Router

     ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8)]],
      name: ['', [Validators.required]],
      ho: ['', [Validators.required]],
      sdt: ['', [Validators.required]],
    });

  }

  onRegister() {
    this.authService.register(this.formRegister.value).subscribe(
      user => {this.toastr.success(``, `Đăng kí thành công`, {
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/login'])

    },
      error => {
        this.error = error.error;
        this.toastr.error(``, `Đăng kí không thành công`, {
          positionClass: 'toast-bottom-right'
        });
      }
    )
  }

}
