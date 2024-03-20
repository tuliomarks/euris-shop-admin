import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/core/model/product.type';
import { ProductsService } from 'src/app/core/services/produts.service';
import { ConfirmationDialog } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html'
})
export class ProductsListComponent{
  
  @Input() storeId: string;
  @Input() gridView: boolean;

  isLoading: boolean = true;
  products: Product[] = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private productsService: ProductsService,
              public dialog: MatDialog){

  }

  ngOnInit(): void
  {
    // Contacts
    this.productsService.products$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((products: Product[]) => {
          this.products = products;
          this.setLoading(false);
      });

      this.refreshList();
  }

  setLoading(newValue: boolean){
    this.isLoading = newValue;
  }
  
  refreshList(){
    this.productsService.getProducts(this.storeId).subscribe();
  }

  openConfirmationDialog(idProduct: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {title: 'Delete confirmation', message: 'Are you sure you want to delete this product? This action cannot be undone.'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.productsService.deleteProduct(this.storeId, idProduct).subscribe(result => {
          this.refreshList();
        });
      }
    });
  }

  getGridViewClass(){
    return this.gridView ? 'grid grid-cols-2 gap-4' : 'flex flex-col' 
  }

}
