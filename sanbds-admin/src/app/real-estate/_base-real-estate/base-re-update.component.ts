import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';

export abstract class BaseReUpdateComponent {
      
  public serverStorageURL = "http://localhost:8000/storage/";
  public form : FormGroup;
  public provinces : any[];
  public rawDistricts : any[];
  public districts: any[];
  public phongtam = [1,2,3];
  public phongngu = [1,2,3,4,5];
  public sub: Subscription;
  public route : ActivatedRoute;
  public service : any;
  public location : Location;
  public realestate: any;
  public routeUpdating : any;
  public toastr : ToastrService;

  loadData() {    
    const id = this.route.snapshot.paramMap.get('id');
    this.sub = this.service.getById(id).subscribe(
      data => {    
        this.filtDistricts(data.province_id);
        this.realestate = data;
        this.form.patchValue(data);
      }
    )
  }

  loadLocal() {
    this.sub = this.service.getAllLocal().subscribe(
      data => {
        this.provinces = data.provinces;
        this.rawDistricts = data.districts;
      }
    )
  }

  setProvinceList(array) {
    this.provinces = array;
  }

  setDistrictList(array) {
    this.districts = array;
  }

  filtDistricts(event) {
    this.districts = this.rawDistricts.filter(district => district.province_id == event);
  }

  onSubmit() {
    this.service.update(this.form.value.id, this.form.value).subscribe(
      data => {
        this.toastr.success(data.diachi,'Cập nhật thành công');
        this.location.back();
      },
      error => {
        this.toastr.error(error.error.error,'Cập nhật thất bại');
      }
    );
  }

  setImages(array) {
    this.form.get('new_images').setValue(array);
  }

  setDeletedImages(array) {
    this.form.get('delete_images').setValue(array);
  }
}
