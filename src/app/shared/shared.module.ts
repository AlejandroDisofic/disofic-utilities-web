import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
]

@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        ...materialModules
    ],
    exports: [
        ...materialModules
    ],
    providers: []
  })
  export class SharedModule {
  }