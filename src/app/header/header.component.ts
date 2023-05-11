import { Component, ElementRef, Renderer2, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuActive: boolean = false;
  menuBtnClick: boolean = false;


  constructor(private renderer: Renderer2) {

    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.menuBtnClick) {
        this.menuActive = false;
      }
      this.menuBtnClick = false;
    });

  }


  toggleMenu() {
    this.menuActive = !this.menuActive;
  }


  preventCloseOnClick() {
    this.menuBtnClick = true;
  }


}


