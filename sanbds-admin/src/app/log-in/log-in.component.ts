import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {  
  form: FormGroup;
  isLogged : boolean;

  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.form =  this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });

    this.isLogged = this.authService.isLogged();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value)
    .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
          this.toastr.success('Chào Admin!');
        },
        error => {
          console.log(error.error);
          this.error = error.error;
        });
  }

}
