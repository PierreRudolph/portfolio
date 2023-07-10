import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio';

  mouseCyrclePosX: number = 0;
  mouseCyrclePosY: number = 0;
  mouseCyrcleDeg: number = 187;
  mouseCyrcleTimeout: any;
  mouseMove: number = 0;

  windowWidth: number = window.innerWidth
  touchDevice: boolean = false;

  legalNoticeShowing: boolean = false;

  constructor(public router: Router) {
    this.checkScreenSize();
    this.checkIfTouchDevice();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
    this.checkIfTouchDevice();
  }


  checkIfTouchDevice() {
    if (this.isTouchDevice())
      this.touchDevice = true;
  }


  isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches
  }


  checkScreenSize() {
    this.windowWidth = window.innerWidth;
  }


  onMouseMove(event: MouseEvent) {
    this.mouseMove = 1;

    clearTimeout(this.mouseCyrcleTimeout);
    this.mouseCyrclePosX = event.pageX;
    this.mouseCyrclePosY = event.pageY;
    this.mouseCyrcleDeg = event.pageX / 360;

    this.mouseCyrcleTimeout = setTimeout(() => {
      this.mouseMove = 0;
    }, 700)
  }
}
