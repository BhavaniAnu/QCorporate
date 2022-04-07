import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  topPosToStartShowing = 100;

  @HostListener('click', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.scrolltop') as HTMLElement;
    if (window.pageYOffset >= this.topPosToStartShowing) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigateByUrl('/contact-us');
  }
}
