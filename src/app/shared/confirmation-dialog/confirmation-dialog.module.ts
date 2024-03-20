import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialog } from './confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports:[
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    ConfirmationDialog
  ],
  exports: [
    ConfirmationDialog
  ]
})
export class ConfirmationDialogModule { }
