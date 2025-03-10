import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-above-fold',
  templateUrl: './above-fold.component.html',
  styleUrls: ['./above-fold.component.scss']
})
export class AboveFoldComponent {
  mobileStyle = false;
  letters = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
  @ViewChild('headlineOne') headlineOne: any;
  @ViewChild('headlineTwo') headlineTwo: any;

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
