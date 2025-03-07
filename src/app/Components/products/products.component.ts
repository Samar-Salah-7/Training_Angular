import { Component, Input, OnChanges, OnInit, output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CurrencyPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { LightBoxDirective } from '../../Directives/light-box.directive';
import { CalcPipe } from '../../Pipes/calc.pipe';
import { Router, RouterModule } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  providers: [StaticDataService],
  imports: [
    NgClass,
    NgStyle,
    LightBoxDirective,
    CurrencyPipe,
    CalcPipe,
    UpperCasePipe,
    RouterModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges, OnInit {
  // productList: IProduct[];
  filtratedList: IProduct[] = [];
  totalPrice: number;
  selectedCategoryId: number;
  @Input() SentId: number = 0;
  productsTotalPrice = output<number>();
  constructor(private router: Router, private staticdata: StaticDataService) {
    this.totalPrice = 0;

    this.selectedCategoryId = 0;

    // this.productList = [
    //   {
    //     id: 1,
    //     name: 'Abutilon',
    //     price: 5,
    //     imgUrl:
    //       'https://th.bing.com/th?id=OSK.6e516523497846aa20ff35b1ed7682a6&w=224&h=200&c=12&rs=1&o=6&dpr=1.3&pid=SANGAM',
    //     quantity: 0,
    //     categoryId: 1,
    //   },
    //   {
    //     id: 2,
    //     name: 'Acacia',
    //     price: 12,
    //     imgUrl:
    //       'https://th.bing.com/th?id=OSK.HEROpRiu0X28Nv2bSD0xitK8Y3cLYXdMtATHdFkhHfnz0-4&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
    //     quantity: 1,
    //     categoryId: 2,
    //   },
    //   {
    //     id: 3,
    //     name: 'Alstroemeria',
    //     price: 12,
    //     imgUrl:
    //       'https://th.bing.com/th?id=ODL.e4b17edf957acb1a78f281a96684af41&w=298&h=224&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=AlgoBlockDebug',
    //     quantity: 10,
    //     categoryId: 3,
    //   },
    //   {
    //     id: 4,
    //     name: 'Anemone',
    //     price: 50,
    //     imgUrl:
    //       'https://www.bing.com/th?id=OIP.oR8sHmddTwRjaYLWFbqF2gHaHa&w=130&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    //     quantity: 3,
    //     categoryId: 4,
    //   },
    //   {
    //     id: 5,
    //     name: 'Abutilon',
    //     price: 5,
    //     imgUrl:
    //       'https://th.bing.com/th?id=OSK.6e516523497846aa20ff35b1ed7682a6&w=224&h=200&c=12&rs=1&o=6&dpr=1.3&pid=SANGAM',
    //     quantity: 0,
    //     categoryId: 1,
    //   },
    //   {
    //     id: 6,
    //     name: 'Acacia',
    //     price: 12,
    //     imgUrl:
    //       'https://th.bing.com/th?id=OSK.HEROpRiu0X28Nv2bSD0xitK8Y3cLYXdMtATHdFkhHfnz0-4&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
    //     quantity: 1,
    //     categoryId: 2,
    //   },
    //   {
    //     id: 7,
    //     name: 'Alstroemeria',
    //     price: 12,
    //     imgUrl:
    //       'https://th.bing.com/th?id=ODL.e4b17edf957acb1a78f281a96684af41&w=298&h=224&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=AlgoBlockDebug',
    //     quantity: 10,
    //     categoryId: 3,
    //   },
    //   {
    //     id: 8,
    //     name: 'Anemone',
    //     price: 50,
    //     imgUrl:
    //       'https://www.bing.com/th?id=OIP.oR8sHmddTwRjaYLWFbqF2gHaHa&w=130&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    //     quantity: 3,
    //     categoryId: 4,
    //   },
    //   {
    //     id: 9,
    //     name: 'Abutilon',
    //     price: 5,
    //     imgUrl:
    //       'https://th.bing.com/th?id=OSK.6e516523497846aa20ff35b1ed7682a6&w=224&h=200&c=12&rs=1&o=6&dpr=1.3&pid=SANGAM',
    //     quantity: 0,
    //     categoryId: 1,
    //   },
    //   {
    //     id: 10,
    //     name: 'Acacia',
    //     price: 12,
    //     imgUrl:
    //       'https://th.bing.com/th?id=OSK.HEROpRiu0X28Nv2bSD0xitK8Y3cLYXdMtATHdFkhHfnz0-4&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
    //     quantity: 1,
    //     categoryId: 2,
    //   },
    // ];
    // this.filtratedList = this.productList;
  }
  // calcQuantity(count: any, updatedQuantity: number) {
  //   return updatedQuantity - count;
  // }
  Shopping(price: number, count: any, newQuantity: number) {
    this.totalPrice += price * Number(count);
    this.productsTotalPrice.emit(this.totalPrice);
    if (newQuantity === 0) {
      return 0;
    } else {
      newQuantity -= count;
      return newQuantity;
    }
  }
  FitrateById() {
    /*
    if (this.SentId === 0) {
      this.filtratedList = this.productList;
    }
    // this.filtratedList = this.productList.filter(
    //   (i) => Number(i.categoryId) === Number(this.selectedCategoryId)
    // );

    this.filtratedList = this.productList.filter(
      (i) => Number(i.categoryId) === Number(this.SentId)
    );
*/
    this.filtratedList = this.staticdata.getProductsByCategoryId(this.SentId);
  }
  // LifeCycle Method
  ngOnChanges(): void {
    this.FitrateById();
  }
  ngOnInit(): void {
    // this.filtratedList = this.productList;
    this.filtratedList = this.staticdata.getAllProducts();
  }
  OpenProductDetails(id: number) {
    this.router.navigateByUrl('/products/' + id);
  }
  DeleteProductById(id: number) {
    this.staticdata.deleteProduct(id);
  }
}
