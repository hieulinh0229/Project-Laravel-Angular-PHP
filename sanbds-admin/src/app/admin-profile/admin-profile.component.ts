import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { UserProfile } from 'app/_models/user-profile.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'app/_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  public dataSource: MatTableDataSource<any>;
  sub: Subscription;
  adminProfile: UserProfile;
  adminForm: FormGroup;
  rolesForm: FormGroup;
  adminRoles: any;
  editMode= false;

  constructor(
    private adminService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public location: Location,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
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
    this.sub = this.adminService.getAdminProfile(id).subscribe(
      data => {
        this.setUserProfile(data);
      });
  }

  updateRoles() {
    this.sub = this.adminService.updateRoles(this.rolesForm.value, this.adminProfile.id)
      .subscribe(
        data => {
          this.toastr.success("Cấp quyền thành công");
          this.setUserProfile(data);
        },
        err => this.toastr.error("Xảy ra lỗi")
      );
  }

  setUserProfile(data) {
    this.adminProfile = data;
    this.adminRoles = JSON.parse(this.adminProfile.permissions);
    this.adminForm.patchValue(this.adminProfile);
    this.rolesForm.patchValue(this.adminRoles);
  }

}
