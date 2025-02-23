import { Component } from '@angular/core';
import { StoreData } from '../../Models/store-data';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  storeData: StoreData;
  isAppear: boolean;
  btnText: string;
  constructor() {
    this.storeData = new StoreData(
      'Flower',
      'https://th.bing.com/th/id/R.13750dc26dfcf65fea74e749eb36e108?rik=vFSj%2ffPmnc6UWg&pid=ImgRaw&r=0',
      ['Toulib', 'Zafran', 'Lavander']
    );
    this.isAppear = false;
    this.btnText = 'Show Image';
  }
  ToggleisAppear() {
    this.isAppear = !this.isAppear;
    if (this.isAppear === true) {
      this.btnText = 'Hide Image';
    } else {
      this.btnText = 'Show Image';
    }
  }
}
