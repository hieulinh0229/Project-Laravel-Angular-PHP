import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { UserProfile } from 'app/_models/user-profile.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public dataSource: MatTableDataSource<any>;
  sub: Subscription;
  userProfile: UserProfile;
  userForm: FormGroup;
  rolesForm: FormGroup;
  userRoles: any;
  editMode = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public location: Location,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [{ value: null, disabled: !this.editMode }],
      ho: [{ value: null, disabled: !this.editMode }],
      sdt: [{ value: null, disabled: !this.editMode }],
      email: [{ value: null, disabled: !this.editMode }],
      images: [{ value: null, disabled: !this.editMode }]
    });

    this.rolesForm = this.fb.group({
      DangBai: [null],
      DatHen: [null],
      GopY: [null],
      Admin: [null]
    })
    const id = +this.route.snapshot.paramMap.get('id');
    this.sub = this.userService.getUserProfile(id).subscribe(
      data => {
        this.setUserProfile(data);
      });
  }

  updateRoles() {
    this.sub = this.userService.updateRoles(this.rolesForm.value, this.userProfile.id)
      .subscribe(
        data => {
          this.toastr.success("Cấp quyền thành công");
          this.setUserProfile(data);
        },
        err => this.toastr.error("Xảy ra lỗi")
      );
  }

  setUserProfile(data) {
    this.userProfile = data;
    this.userRoles = JSON.parse(this.userProfile.permissions);
    this.userForm.patchValue(this.userProfile);
    this.rolesForm.patchValue(this.userRoles);
  }



}
