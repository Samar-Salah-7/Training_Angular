import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-details',
  standalone: true,
  providers: [StaticDataService],
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  ExtractedId: number;
  product: IProduct | null = null;
  constructor(
    private activeRoute: ActivatedRoute,
    private staticdata: StaticDataService
  ) {
    this.ExtractedId = 0;
  }

  RecievedId() {
    this.ExtractedId = Number(this.activeRoute.snapshot.paramMap.get('ID'));
  }
  getProduct() {
    this.product = this.staticdata.getProductById(this.ExtractedId);
  }
  // BackToProducts() {
  //   this.router.navigateByUrl('/products');
  // }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit(): void {
    this.RecievedId();
    this.getProduct();
  }
}
