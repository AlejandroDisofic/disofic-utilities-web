import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-department-modal',
  templateUrl: './create-department-modal.component.html',
  styleUrls: ['./create-department-modal.component.css']
})
export class CreateDepartmentModalComponent implements OnInit {
  public createDepartmentForm!: FormGroup;
  public modelData!: any;

  constructor(
    private _fb: FormBuilder,
    public _dialoRef: MatDialogRef<CreateDepartmentModalComponent>,
  ) {
  }

  ngOnInit(): void {
    this.createDepartmentForm = this.createDepartmentToFormGroup();
  }

  public createDepartmentToFormGroup(): FormGroup {
    return this._fb.group({
      client: [null, [Validators.required]],
      dept: [null, [Validators.required]],
    })
  }

  public submitData() {
    if(this.createDepartmentForm.invalid) {
      return;
    }
    const modelDataCopy:any = {
      ROWID: this.modelData.ROWID,
      CLIENTE: this.createDepartmentForm.get('client')?.value,
      DEPT_CLI: this.createDepartmentForm.get('dept')?.value,
    }
    // this._handleCreateDepartmentService.insertItem(modelDataCopy).subscribe(() => {
    //   this._closeModal(true);
    // })
  }

  private _closeModal(value?: boolean) {
    this._dialoRef.close(value);
  }
}
