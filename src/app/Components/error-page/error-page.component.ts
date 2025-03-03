import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export class ErrorPageComponent {
  // currentLoc;
  constructor(private location: Location) {
    // this.currentLoc = location.isCurrentPathEqualTo("/**");
  }
  Back() {
    this.location.back();
  }
}
