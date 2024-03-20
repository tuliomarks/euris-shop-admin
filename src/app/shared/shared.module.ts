import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductsModule } from './products/products.module';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';

@NgModule({
  imports:[
    MatIconModule,
    ProductsModule,
    ConfirmationDialogModule
  ],
  declarations: [
  ],
  exports: [
    MatIconModule,
    ProductsModule,
    ConfirmationDialogModule
  ]
})
export class SharedModule { }
