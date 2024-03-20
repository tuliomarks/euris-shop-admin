import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { Product, ProductCategoryStat, ProductData } from '../model/product.type';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class ProductsService extends BaseService
{
    private _product: BehaviorSubject<Product> = new BehaviorSubject(null);
    private _products: BehaviorSubject<Product[]> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
        super();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    get product$(): Observable<Product> {
        return this._product.asObservable();
    }

    get products$(): Observable<Product[]> {
        return this._products.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    getProducts(storeId: string): Observable<any> {
        return this._httpClient.get<Product[]>(`${this.baseEndpoint}/stores/${storeId}/products`).pipe(
            tap((response: Product[]) => {
                this._products.next(response);
            })
        );
    }

    getProductById(storeId: string, productId: string): Observable<any> {
        return this._httpClient.get<Product>(`${this.baseEndpoint}/stores/${storeId}/products/${productId}`).pipe(
            map((response) => {
                this._product.next(response);
                return response;
            })
        );
    }

    addProduct(storeId: string, model: ProductData): Observable<string> {
        return this._httpClient.post(`${this.baseEndpoint}/stores/${storeId}/products`, model, {responseType: 'text'}).pipe(
            map((response: string) => {
                return response;
            })
        );
    }

    deleteProduct(storeId: string, productId: string): Observable<string> {
        return this._httpClient.delete(`${this.baseEndpoint}/stores/${storeId}/products/${productId}`).pipe(
            map((response: string) => {
                return response;
            })
        );
    }

    getProductCategoryRatio(storeId: string): Observable<ProductCategoryStat[]> {
        return this._httpClient.get<ProductCategoryStat[]>(`${this.baseEndpoint}/stores/${storeId}/stats/categories`);
    }
}
