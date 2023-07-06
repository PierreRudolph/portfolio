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
  mouseMove: number = 0;
  interval: any;
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
    this.mouseMove = 1;

    clearInterval(this.interval);
    this.cyrclePosX = event.pageX;
    this.cyrclePosY = event.pageY;
    this.linearGradientDeg = event.pageX / 360;

    this.interval = setTimeout(() => {
      this.mouseMove = 0;
    }, 700)
  }
}
