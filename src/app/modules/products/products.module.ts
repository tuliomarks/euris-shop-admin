import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './products.routing';

@NgModule({
  imports:[
    CommonModule,
    SharedModule,
    RouterModule.forChild(productsRoutes),
  ],
  declarations: [
    ProductDetailComponent
  ],
  exports: [
    ProductDetailComponent
  ]
})
export class ProductsModule { }
