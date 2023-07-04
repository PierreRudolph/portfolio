import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-above-fold',
  templateUrl: './above-fold.component.html',
  styleUrls: ['./above-fold.component.scss']
})
export class AboveFoldComponent {
  mobileStyle = false;
  h1 = event?.target as HTMLElement;
  letters = 'ABCDFGHJKLMNOPQRSTUVWXYZ';
  letter: any;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.mobileStyle = window.innerWidth < 880;
  }
}
