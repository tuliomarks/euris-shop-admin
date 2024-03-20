import { Route } from '@angular/router';
import { ProductDetailComponent } from './detail/product-detail.component';

export const productsRoutes: Route[] = [
    {
        path     : ':storeId/new',
        component: ProductDetailComponent
    },
    {
        path     : ':storeId/:id',
        component: ProductDetailComponent
    }
];
