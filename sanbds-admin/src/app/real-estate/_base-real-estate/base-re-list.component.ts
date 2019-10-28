import { ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Subscription } from "rxjs";
import { ToastrService } from "ngx-toastr";


export abstract class BaseReListComponent {

  public displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published', 'edit'];
  public elements: any[] = [];
  public dataSource: MatTableDataSource<any>;
  public sub: Subscription;
  public service: any;
  public routerUpdating : any;
  public router: any;
  public toastr : ToastrService;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  loadData() {
    this.sub = this.service.getAll().subscribe(
      data => {
        this.elements = data;
        this.dataSource = new MatTableDataSource<any>(this.elements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  updateStatus(element) {
    let status = element.trangthai;
    status = !status;
    const id = element.id;
    this.sub = this.service.updateStatus(id, status).subscribe(
      data => {
        element.trangthai = status;
        if (status) {
          this.toastr.success(`${element.diachi} , ${element.district} - ${element.province}`,'Chuyển trạng thái sang hoàn tất');
        } else {
          this.toastr.success(`${element.diachi} , ${element.district} - ${element.province}`,'Chuyển trạng thái sang chờ');
        }
      },
      error => {
        alert(element.trangthai)
        this.toastr.error(error.error.error, 'Chuyển trạng thái không thành công')
      }
    )
  }

  updatePublicate(element) {
    const published = !element.published;    const id = element.id;
    this.sub = this.service.updatePubicate(id, published).subscribe(
      data => {
        element.published = published;
        if (published) {
          this.toastr.success(`${element.diachi} , ${element.district} - ${element.province}`,'Công khai');
        } else {
          this.toastr.success(`${element.diachi} , ${element.district} - ${element.province}`,'Bỏ công khai');
        }
      },
      error => {        
        this.toastr.error(error.error.error, 'Chuyển chế độ không thành công')
      }
    )
  }


  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
}
