import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shopping',
  standalone: true,
  providers: [DynamicDataService],
  imports: [HttpClientModule],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css',
})
export class ShoppingComponent implements OnInit {
  data: any[] = [];
  constructor(private dynamicData: DynamicDataService) {}
  GetAll() {
    this.dynamicData.getAllData().subscribe((prds) => (this.data = prds));
  }
  ngOnInit(): void {
    this.GetAll();
    console.log(this.data);
  }
}
