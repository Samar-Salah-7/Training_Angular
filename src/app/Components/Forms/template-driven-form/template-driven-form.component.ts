import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StaticDataService } from '../../../Services/static-data.service';
import { IProduct } from '../../../Models/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  providers: [StaticDataService],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  newProduct: IProduct = {} as IProduct;
  constructor(private staticData: StaticDataService, private router: Router) {}
  addMyProduct() {
    this.staticData.addProduct(this.newProduct);
    this.router.navigateByUrl('/products');
  }
}
