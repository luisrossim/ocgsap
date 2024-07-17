import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('video') video!: ElementRef<HTMLDivElement>

  ngAfterViewInit(){
    //gsap.registerPlugin(ScrollTrigger)
    gsap.from(this.banner1.nativeElement, {y: "100px", opacity: 0})
    gsap.to(this.banner1.nativeElement, {y: "0px", opacity: 1, ease:'power4.out', duration: 1.5})

    gsap.from(this.banner2.nativeElement, {y: "105px", opacity: 0})
    gsap.to(this.banner2.nativeElement, {y: "0px", opacity: 1, ease:'power4.out', duration: 2.2})

    gsap.from(this.banner3.nativeElement, {y: "110px", opacity: 0})
    gsap.to(this.banner3.nativeElement, {y: "0px", opacity: 1, ease:'power4.out', duration: 2.7})

    gsap.from(this.video.nativeElement, {scale: 0.9, opacity: 0})
    gsap.to(this.video.nativeElement, {scale: 1, opacity: 1, ease:'power4.out', duration: 1.5})
  }

}
