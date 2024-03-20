import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  
    storeId: string = 'ijpxNJLM732vm8AeajMR';
    isGridView: any;
    
    constructor(private router: Router){
    }

    navigateNewProduct(){
        this.router.navigate(['products', this.storeId, 'new']);
    }

    toggleGridView(){
        this.isGridView = !this.isGridView;
    }
}
