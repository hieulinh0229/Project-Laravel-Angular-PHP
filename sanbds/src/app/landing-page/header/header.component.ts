import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
declare const siteMenuClone : any;



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user : any;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    if (this.isLogged) {
      this.authService.currentUser.subscribe(user => this.user = user);
    }
    siteMenuClone();
  }

  get isLogged() {
    return this.authService.isLogged();
  }
  logOut() {
    this.authService.logout();
    this.toastr.success('Đăng xuất thành công')
  }
}
