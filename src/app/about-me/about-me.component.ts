import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  mobileStyle = false;

  constructor() {
    this.checkScreenSize()
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.mobileStyle = window.innerWidth > 580;
  }
}
