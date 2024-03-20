import { NgModule } from '@angular/core';
import { ProductsListComponent } from './list/products-list.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductFormComponent } from './form/product-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductsChartComponent } from './chart/products-chart.component';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [
    ProductsListComponent,
    ProductFormComponent,
    ProductsChartComponent
  ],
  exports: [
    ProductsListComponent,
    ProductFormComponent,
    ProductsChartComponent
  ]
})
export class ProductsModule { }
