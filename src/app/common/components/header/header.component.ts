import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.second') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  // private toggleButton: any;
  // private sidebarVisible: boolean;

  constructor(public location: Location, private element: ElementRef) {
    // this.sidebarVisible = false;
  }

  ngOnInit() {
    // const navbar: HTMLElement = this.element.nativeElement;
    // this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

  }
  

  // sidebarOpen() {
  //   const toggleButton = this.toggleButton;
  //   const html = document.getElementsByTagName('html')[0];

  //   setTimeout(function () {
  //     toggleButton.classList.add('toggled');
  //   }, 500);
  //   html.classList.add('nav-open');

  //   this.sidebarVisible = true;
  // };

  // sidebarClose() {
  //   const html = document.getElementsByTagName('html')[0];
  //   this.toggleButton.classList.remove('toggled');
  //   this.sidebarVisible = false;
  //   html.classList.remove('nav-open');
  // };
  // sidebarToggle() {
  //   if (this.sidebarVisible === false) {
  //     this.sidebarOpen();
  //   } else {
  //     this.sidebarClose();
  //   }
  // };

}
