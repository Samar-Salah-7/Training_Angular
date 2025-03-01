import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../Models/icategory';
import { ProductsComponent } from '../products/products.component';
import { CalcPipe } from '../../Pipes/calc.pipe';

@Component({
  selector: 'app-master-products',
  standalone: true,
  imports: [FormsModule, ProductsComponent, CalcPipe],
  templateUrl: './master-products.component.html',
  styleUrl: './master-products.component.css',
})
export class MasterProductsComponent {
  selectedCategoryId: number;
  recievedTotalPrice: number = 0;
  categoryList: ICategory[];
  constructor() {
    this.selectedCategoryId = 0;
    this.categoryList = [
      {
        id: 1,
        categoryName: 'SummerFlowers',
      },
      {
        id: 2,
        categoryName: 'AutumnFlowers',
      },
      {
        id: 3,
        categoryName: 'WinterFlowers',
      },
      {
        id: 4,
        categoryName: 'SpringFlowers',
      },
    ];
  }
  RecievedTotalPrice(data: number) {
    this.recievedTotalPrice = data;
  }
}
