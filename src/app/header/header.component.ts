import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuBtnClick: boolean = false;
  menuActive: boolean = false;


  @ViewChild(FooterComponent)
  footerComponent!: FooterComponent;

  @ViewChild('menuLinks')
  menuLinks!: ElementRef<HTMLDivElement>;


  constructor(private renderer: Renderer2) {

    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.menuBtnClick) {
        this.menuActive = false;
        this.emitToggleToFooter();
      }
      this.menuBtnClick = false;

    });
  }


  toggleMenu() {
    this.menuActive = !this.menuActive;
    this.setMenuLinksClass();
    this.emitToggleToFooter();
  }


  setMenuLinksClass() {
    if (window.innerWidth > 1350)
      this.menuLinks.nativeElement.className = 'menu-links-animation menu-links';


    if (window.innerWidth <= 1350)
      this.menuLinks.nativeElement.className = 'menu-links-animation-small menu-links';

    if (window.innerWidth < 800)
      this.menuLinks.nativeElement.className = 'menu-links-animation-smaller menu-links';
  }


  emitToggleToFooter() {
    this.footerComponent.headerMenuActive = this.menuActive;
  }


  preventCloseOnClick() {
    this.menuBtnClick = true;
  }
}


