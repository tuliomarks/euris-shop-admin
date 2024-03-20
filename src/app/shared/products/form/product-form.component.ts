import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductData } from 'src/app/core/model/product.type';
import { ProductsService } from 'src/app/core/services/produts.service';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  
    @Input() storeId: string;
    @Input() productId: string;
    @Input() model: ProductData;
    
    productForm!: FormGroup;
    isInserting: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) { 
    this.isInserting = Boolean(!this.productId);
  }

  ngOnInit(): void {

    //To check if is correct only price required. For now mapped as in the API rules
    this.productForm = this.formBuilder.group({
      title:        [this.model?.title],
      category:     [this.model?.category],
      price:        [this.model?.price, Validators.required],
      employee:     [this.model?.employee],
      description:  [this.model?.description],
      reviews:      [this.model?.review.concat(',')]
    });
  }

  onSubmit(): void {

    if (!this.productForm.valid) {
        return;
    }
    
    let {reviews, ...formData} = this.productForm.getRawValue();
    if (reviews){
        formData.reviews = reviews.split(',').map(x=> x.trim());
    }
    
    if (this.isInserting) {
      // Add new product
      this.productsService.addProduct(this.storeId, formData).subscribe((productId) => {
        this.router.navigate(['/products',this.storeId, productId]);
      });
    } else {
        //TODO: implement update product 
        throw "Not implemented";
    }
  }
}
