import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreateDepartmentModalComponent } from 'src/app/modals/create-department-modal/create-department-modal.component';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css'],
})
export class CreateDepartmentComponent implements OnInit {
  public displayedColumns: string[] = ['cliente', 'dept', 'articulo'];
  public dataSource: any = new MatTableDataSource<any>([{cliente: 'xyz', dept: 'dept1', articulo: '123.123'}]);

  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }

  openCreateDepartmentModal() {
    const dialogRef=this.dialog.open(CreateDepartmentModalComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal Cerrado')
      // this.ngOnInit();
    });
  }
}
