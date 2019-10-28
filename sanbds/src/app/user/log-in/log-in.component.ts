import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formLogin: FormGroup;
  error: string;
  isSubmited = false;
  email: string;
  redirectURL: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8), Validators.required]]
    })

    if (this.isLogged) {
      const token = localStorage.getItem('currentUser');
    }
  }

  get isLogged() {
    return this.authService.isLogged();
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.formLogin.invalid) {
      return;
    }

    let params = this.route.snapshot.queryParams;
    if (params['redirectURL']) {
      this.redirectURL = params['redirectURL'];
    }

    this.authService.login(this.formLogin.value).subscribe(
      data => {
        this.logInSuccess(data)
      },
      error => {
        console.log(error)
        this.error = "Tài khoản hoặc mật khẩu không đúng";
      }
    )
  }

  logOut() {
    this.authService.logout();
  }

  logInSuccess(data: any): void {
    this.toastr.success(``, `Đăng nhập thành công`, {
      positionClass: 'toast-bottom-right',
    });

    if (this.redirectURL) {
      this.router.navigateByUrl(this.redirectURL)
        .catch(() => this.router.navigate(['/home']))
    } else {
      this.router.navigate(['/home'])
    }
  }

}
