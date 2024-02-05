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

  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;
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


  isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches
  }


  checkScreenSize() {
    this.windowWidth = window.innerWidth;
  }


  checkIfTouchDevice() {
    if (this.isTouchDevice())
      this.touchDevice = true;
  }


  onMouseMove(event: MouseEvent) {
    if ((event.pageX > this.mouseCyrclePosX + 10 || event.pageX < this.mouseCyrclePosX - 10) || (event.pageY > this.mouseCyrclePosY + 10 || event.pageY < this.mouseCyrclePosY - 10)) {
      this.mouseMove = 1;
      clearTimeout(this.mouseCyrcleTimeout);
      this.setMousePosition(event);
      this.mouseCyrcleDeg = event.pageX / 360;
      this.hideMouseCyrcleAfterTimeout();
    }
  }


  setMousePosition(event: MouseEvent) {
    if (event.pageX > this.mouseCyrclePosX + 10 || event.pageX < this.mouseCyrclePosX - 10) {
      this.mouseCyrclePosX = event.pageX;
    }

    if (event.pageY > this.mouseCyrclePosY + 10 || event.pageY < this.mouseCyrclePosY - 10) {
      this.mouseCyrclePosY = event.pageY;
    }
  }


  hideMouseCyrcleAfterTimeout() {
    this.mouseCyrcleTimeout = setTimeout(() => {
      this.mouseMove = 0;
    }, 700)
  }
}
