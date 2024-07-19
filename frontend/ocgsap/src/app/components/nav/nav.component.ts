import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  sidebarVisible: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element: any = document.getElementById('navbar')
    if (window.scrollY > 55) {
      element.classList.add('navbar-block');
    } else {
      element.classList.remove('navbar-block');
    }
  }
}
