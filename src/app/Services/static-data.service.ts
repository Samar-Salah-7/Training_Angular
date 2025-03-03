import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticDataService {
  productList: IProduct[];
  constructor() {
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
  }
  getAllProducts(): IProduct[] {
    return this.productList;
  }
  getProductsByCategoryId(catId: number): IProduct[] {
    if (catId === 0) {
      return this.productList;
    }
    return this.productList.filter(
      (item) => Number(item.categoryId) === Number(catId)
    );
  }
  getProductById(productId: number): IProduct | null {
    let prd = this.productList.find((p) => p.id === Number(productId));
    return prd ? prd : null;
  }
  addProduct(prd: IProduct) {
    this.productList.push(prd);
  }
  deleteProduct(prdId: number) {
    let prd = this.productList.find((p) => p.id === Number(prdId));
    let index = this.productList.indexOf(prd as IProduct);
    this.productList.splice(index, 1);
    this.getAllProducts();
  }
  editProduct(prdId: number, product: IProduct) {
    let prd = this.productList.find((p) => p.id === Number(prdId));
    let index = this.productList.indexOf(prd as IProduct);
    this.productList.splice(index, 1, product);
    this.getAllProducts();
  }
}
