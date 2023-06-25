import { Component, HostListener, ViewChild } from '@angular/core';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio';
  menuActiveParent: boolean = false;
  mobileStyle: boolean = false;
  lastScrollPos: number = 0;
  cyrclePosX: number = 0;
  cyrclePosY: number = 0;

  @ViewChild(MySkillsComponent)
  skillsComponent!: MySkillsComponent;

  @ViewChild(PortfolioComponent)
  portfolioComponent!: PortfolioComponent;

  @ViewChild(ContactFormComponent)
  contactComponent!: ContactFormComponent;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.mobileStyle = window.innerHeight < 920;
  }


  onMouseMove(event: MouseEvent) {
    this.cyrclePosX = event.pageX;
    this.cyrclePosY = event.pageY;
  }


  scrollHandler(event: any) {
    let currentScrollPos = event.currentTarget.scrollTop;

    if (currentScrollPos > this.lastScrollPos) {
      this.handleScrollDown();
      this.handleMobileScrollDown();
    } else {
      this.handleScrollUp();
      this.handleMobileScrollUp();
    }
    this.lastScrollPos = currentScrollPos;
  }


  handleScrollDown() {
    if (this.mobileStyle)
      return;

    if (this.lastScrollPos > 800)
      this.skillsComponent.arrowAnimation = true;

    if (this.lastScrollPos > 1900)
      this.portfolioComponent.arrowAnimation = true;

    if (this.lastScrollPos > 3533)
      this.contactComponent.arrowAnimation = true;
  }


  handleScrollUp() {
    if (this.mobileStyle)
      return;

    if (this.lastScrollPos < 580)
      this.skillsComponent.arrowAnimation = false;

    if (this.lastScrollPos < 1500)
      this.portfolioComponent.arrowAnimation = false;

    if (this.lastScrollPos < 3000)
      this.contactComponent.arrowAnimation = false;
  }


  handleMobileScrollDown() {
    if (!this.mobileStyle)
      return;

    if (this.lastScrollPos > 1440)
      this.skillsComponent.arrowAnimation = true;

    if (this.lastScrollPos > 2330)
      this.portfolioComponent.arrowAnimation = true;

    if (this.lastScrollPos > 7300)
      this.contactComponent.arrowAnimation = true;
  }


  handleMobileScrollUp() {
    if (!this.mobileStyle)
      return;

    if (this.lastScrollPos < 1090)
      this.skillsComponent.arrowAnimation = false;

    if (this.lastScrollPos < 2050)
      this.portfolioComponent.arrowAnimation = false;

    if (this.lastScrollPos < 6900)
      this.contactComponent.arrowAnimation = false;
  }
}
