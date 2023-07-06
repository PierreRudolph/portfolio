import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio';
  menuActiveParent: boolean = false;
  lastScrollPos: number = 0;
  cyrclePosX: number = 0;
  cyrclePosY: number = 0;
  linearGradientDeg: number = 187;
  windowWidth: number = window.innerWidth

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.windowWidth = window.innerWidth;
  }


  onMouseMove(event: MouseEvent) {
    this.cyrclePosX = event.pageX;
    this.cyrclePosY = event.pageY;
    this.linearGradientDeg = event.pageX / 360;
  }
}
