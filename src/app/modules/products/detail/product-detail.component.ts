import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from 'src/app/core/model/product.type';
import { ProductsService } from 'src/app/core/services/produts.service';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  
    storeId: string;
    productId: string;
    product: ProductData;

    isLoading: boolean = false;
    isInserting: boolean;
    
    constructor(private route: ActivatedRoute,
                private productsService: ProductsService){
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe({
            next: (params: any) => this.handleRouteParams(params)
        });
    }

    handleRouteParams(params: any): void {
        const productId = params.get('id');
        const storeId = params.get('storeId');
        this.storeId = storeId;
        this.productId = productId;

        this.isInserting = Boolean(!this.productId);
        
        if (storeId && productId) {
            this.productsService.getProductById(storeId, productId).subscribe(product => {
                this.product = product;
                this.setLoading(false);
            });
        }
    }

    setLoading(newValue: boolean){
        this.isLoading = newValue;
    }
}
