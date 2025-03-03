import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  ExtractedId: number;
  constructor(private activeRoute: ActivatedRoute) {
    this.ExtractedId = 0;
  }
  RecievedId() {
    this.ExtractedId = Number(this.activeRoute.snapshot.paramMap.get('ID'));
  }
  ngOnInit(): void {
    this.RecievedId();
  }
}
