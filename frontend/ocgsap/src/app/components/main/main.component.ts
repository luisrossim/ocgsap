import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {
  @ViewChild('banner1') banner1!: ElementRef<HTMLDivElement>
  @ViewChild('banner2') banner2!: ElementRef<HTMLDivElement>
  @ViewChild('banner3') banner3!: ElementRef<HTMLDivElement>
  @ViewChild('banner4') banner4!: ElementRef<HTMLDivElement>
  @ViewChild('banner5') banner5!: ElementRef<HTMLDivElement>
  @ViewChild('banner6') banner6!: ElementRef<HTMLDivElement>
  @ViewChild('video') video!: ElementRef<HTMLDivElement>

  ngAfterViewInit(){
    //gsap.registerPlugin(ScrollTrigger)
    gsap.from(this.banner1.nativeElement, {x: "-200px", opacity: 0})
    gsap.to(this.banner1.nativeElement, {x: "0px", opacity: 1, ease:'power4.out', duration: 1.8})

    gsap.from(this.banner2.nativeElement, {y: "-100px", opacity: 0})
    gsap.to(this.banner2.nativeElement, {y: "0px", opacity: 1, ease:'power4.out', duration: 1.8})

    gsap.from(this.banner3.nativeElement, {y: "-50px", opacity: 0})
    gsap.to(this.banner3.nativeElement, {y: "0px", opacity: 1, ease:'power4.out', duration: 2})

    gsap.from(this.banner4.nativeElement, {y: "100px", opacity: 0})
    gsap.to(this.banner4.nativeElement, {y: "0px", opacity: 1, ease:'power4.out', duration: 2})

    gsap.from(this.banner5.nativeElement, {y: "-100px", x: "50px", opacity: 0})
    gsap.to(this.banner5.nativeElement, {y: "0px", x: "0px", opacity: 1, ease:'power4.out', duration: 3})

    gsap.from(this.banner6.nativeElement, {y: "50px", x: "50px", opacity: 0})
    gsap.to(this.banner6.nativeElement, {y: "0px", x: "0px", opacity: 1, ease:'power4.out', duration: 4})

    gsap.from(this.video.nativeElement, {scale: 0.8, opacity: 0})
    gsap.to(this.video.nativeElement, {scale: 1, opacity: 1, ease:'power4.out', duration: 1.5})
  }

}
