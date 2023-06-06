import { Component, Renderer2, ViewChild } from '@angular/core';
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

  constructor(private renderer: Renderer2) {

    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.menuBtnClick) {
        this.toggleMenu();
      }
      this.menuBtnClick = false;
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    this.emitToggleToFooter();
  }

  emitToggleToFooter() {
    this.footerComponent.headerMenuActive = this.menuActive;
  }

  preventCloseOnClick() {
    this.menuBtnClick = true;
  }
}


