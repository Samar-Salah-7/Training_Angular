import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isVisible = true;
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Check the `showHeader` property in the route data
        let route = this.activeRouter;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.isVisible = route.snapshot.data['showHeader'] !== false;
      });
    // const savedTheme = localStorage.getItem('theme') || 'light';
    // document.documentElement.setAttribute('data-theme', savedTheme);
  }
  // toggleTheme() {
  //   const currentTheme = document.documentElement.getAttribute('data-theme');
  //   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  //   document.documentElement.setAttribute('data-theme', newTheme);
  //   localStorage.setItem('theme', newTheme); // حفظ الاختيار
  // }
}
