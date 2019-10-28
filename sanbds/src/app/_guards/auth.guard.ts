import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private router: Router,
    private authService: AuthService,
    private toastr : ToastrService,
    private location : Location
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const currentToken = this.authService.currentTokenValue;
    
    if (currentToken) {        
        this.authService.renewUserProfile();
        let roles = next.data["roles"] as Array<string>;

        if (roles) {
          var match = this.authService.roleMatch(roles);

          if (match) return true;
          else {
            this.toastr.warning('Liên hệ Quản trị viên để được hỗ trợ', 'Truy cập vượt quá quyền hạn',  {
              positionClass: 'toast-bottom-right',
            });
            return false;
          }
        }
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.toastr.info("",'Bạn phải đăng nhập', {
      positionClass: 'toast-bottom-right',
    });
    this.router.navigate(['/login'], { queryParams: { redirectURL: state.url } });
    return false;
  }
  
}
