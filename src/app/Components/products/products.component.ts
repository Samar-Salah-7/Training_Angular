import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CurrencyPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { LightBoxDirective } from '../../Directives/light-box.directive';
import { CalcPipe } from '../../Pipes/calc.pipe';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    LightBoxDirective,
    CurrencyPipe,
    CalcPipe,
    UpperCasePipe,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: IProduct[];
  categoryList: ICategory[];
  filtratedList: IProduct[];
  totalPrice: number;
  selectedCategoryId: number;
  constructor() {
    this.totalPrice = 0;

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
    this.productList = [
      {
        id: 1,
        name: 'Abutilon',
        price: 5,
        imgUrl:
          'https://th.bing.com/th?id=OSK.6e516523497846aa20ff35b1ed7682a6&w=224&h=200&c=12&rs=1&o=6&dpr=1.3&pid=SANGAM',
        quantity: 0,
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Acacia',
        price: 12,
        imgUrl:
          'https://th.bing.com/th?id=OSK.HEROpRiu0X28Nv2bSD0xitK8Y3cLYXdMtATHdFkhHfnz0-4&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
        quantity: 1,
        categoryId: 2,
      },
      {
        id: 3,
        name: 'Alstroemeria',
        price: 12,
        imgUrl:
          'https://th.bing.com/th?id=ODL.e4b17edf957acb1a78f281a96684af41&w=298&h=224&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=AlgoBlockDebug',
        quantity: 10,
        categoryId: 3,
      },
      {
        id: 4,
        name: 'Anemone',
        price: 50,
        imgUrl:
          'https://www.bing.com/th?id=OIP.oR8sHmddTwRjaYLWFbqF2gHaHa&w=130&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        quantity: 3,
        categoryId: 4,
      },
      {
        id: 5,
        name: 'Abutilon',
        price: 5,
        imgUrl:
          'https://th.bing.com/th?id=OSK.6e516523497846aa20ff35b1ed7682a6&w=224&h=200&c=12&rs=1&o=6&dpr=1.3&pid=SANGAM',
        quantity: 0,
        categoryId: 1,
      },
      {
        id: 6,
        name: 'Acacia',
        price: 12,
        imgUrl:
          'https://th.bing.com/th?id=OSK.HEROpRiu0X28Nv2bSD0xitK8Y3cLYXdMtATHdFkhHfnz0-4&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
        quantity: 1,
        categoryId: 2,
      },
      {
        id: 7,
        name: 'Alstroemeria',
        price: 12,
        imgUrl:
          'https://th.bing.com/th?id=ODL.e4b17edf957acb1a78f281a96684af41&w=298&h=224&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=AlgoBlockDebug',
        quantity: 10,
        categoryId: 3,
      },
      {
        id: 8,
        name: 'Anemone',
        price: 50,
        imgUrl:
          'https://www.bing.com/th?id=OIP.oR8sHmddTwRjaYLWFbqF2gHaHa&w=130&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        quantity: 3,
        categoryId: 4,
      },
      {
        id: 9,
        name: 'Abutilon',
        price: 5,
        imgUrl:
          'https://th.bing.com/th?id=OSK.6e516523497846aa20ff35b1ed7682a6&w=224&h=200&c=12&rs=1&o=6&dpr=1.3&pid=SANGAM',
        quantity: 0,
        categoryId: 1,
      },
      {
        id: 10,
        name: 'Acacia',
        price: 12,
        imgUrl:
          'https://th.bing.com/th?id=OSK.HEROpRiu0X28Nv2bSD0xitK8Y3cLYXdMtATHdFkhHfnz0-4&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
        quantity: 1,
        categoryId: 2,
      },
    ];
    this.filtratedList = this.productList;
  }
  // calcQuantity(count: any, updatedQuantity: number) {
  //   return updatedQuantity - count;
  // }
  Shopping(price: number, count: any, newQuantity: number) {
    this.totalPrice += price * Number(count);

    if (newQuantity === 0) {
      return 0;
    } else {
      newQuantity -= count;
      return newQuantity;
    }
  }
  FitrateById() {
    this.filtratedList = this.productList.filter(
      (i) => Number(i.categoryId) === Number(this.selectedCategoryId)
    );
  }
}
