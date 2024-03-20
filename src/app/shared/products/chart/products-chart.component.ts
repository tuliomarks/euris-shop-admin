import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ProductsService } from 'src/app/core/services/produts.service';

@Component({
  selector: 'products-chart',
  templateUrl: './products-chart.component.html'
})
export class ProductsChartComponent implements OnInit {
  
  @Input() storeId: string;

  chart: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductCategoryRatio(this.storeId).subscribe(data => {
      const labels = data.map(x=> x.category);
      const values = data.map(x=> x.numberOfProducts);

      console.log(labels, values);
      this.chart = new Chart('canvas', {
        type: 'polarArea',
        data: {
          labels: labels,
          datasets: [{
            label: 'Products per Category',
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderWidth: 1
          }]
        }
      });
    });
  }
}