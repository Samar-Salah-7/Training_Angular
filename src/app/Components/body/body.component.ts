import { Component } from '@angular/core';
import { StoreData } from '../../Models/store-data';
import { CircularImages } from '../../Models/circular-images';

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
  ///Slide Images
  btnPrevText: string;
  btnNextText: string;
  // btnPlayText: string;
  // btnPause: boolean;
  index: number;
  circleImage: CircularImages;
  constructor() {
    this.storeData = new StoreData(
      'Flower',
      'https://th.bing.com/th/id/R.13750dc26dfcf65fea74e749eb36e108?rik=vFSj%2ffPmnc6UWg&pid=ImgRaw&r=0',
      ['Toulib', 'Zafran', 'Lavander']
    );
    this.isAppear = false;
    this.btnText = 'Show Image';
    ///Slide Images
    this.circleImage = new CircularImages([
      'https://th.bing.com/th/id/R.cfc0a740b952d1b32eef93704c29a1d5?rik=lD5ri8tiJNWndg&riu=http%3a%2f%2fwebneel.com%2fwallpaper%2fsites%2fdefault%2ffiles%2fimages%2f01-2014%2f24-flower-wallpaper.jpg&ehk=XsXUBEGRaV1va7iW7P%2f3vcG8B68Rmj9AkhUrfEzwTWQ%3d&risl=&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/OIP.7Gp7OGf73cLxX1afG_4V4AHaE8?w=4176&h=2784&rs=1&pid=ImgDetMain',
      'https://plantcaretoday.com/wp-content/uploads/plumeria-fertilizer-t1-min.jpg',
    ]);
    this.btnPrevText = 'Previos';
    this.btnNextText = 'Next';
    // this.btnPlayText = 'Play';
    // this.btnPause = true;
    this.index = 0;
  }
  ToggleisAppear() {
    this.isAppear = !this.isAppear;
    if (this.isAppear === true) {
      this.btnText = 'Hide Image';
    } else {
      this.btnText = 'Show Image';
    }
  }
  // TogglePlay() {
  //   this.btnPause = !this.btnPause;
  //   if (this.btnPause === true) {
  //     this.btnPlayText = 'Play';
  //   } else {
  //     this.btnPlayText = 'Pause';
  //   }
  // }
  showImage() {
    if (this.index >= this.circleImage.slideImages.length) this.index = 0;
    if (this.index < 0) this.index = this.circleImage.slideImages.length - 1;
  }
  btnNext() {
    this.index++;
    this.showImage();
  }
  btnPrev() {
    this.index--;
    this.showImage();
  }
}
