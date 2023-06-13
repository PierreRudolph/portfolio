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

  cyrclePosX: number = 0;
  cyrclePosY: number = 0;

  lastScrollTop = 0;

  @ViewChild(MySkillsComponent)
  skillsComponent!: MySkillsComponent;

  @ViewChild(PortfolioComponent)
  portfolioComponent!: PortfolioComponent;

  @ViewChild(ContactFormComponent)
  contactComponent!: ContactFormComponent;

  mobileStyle = false;

  constructor() {
    this.checkScreenSize();

  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.mobileStyle = window.innerWidth < 1100;
  }

  scrollHandler(event: any) {

    let currentScrollTop = event.currentTarget.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      this.handleScrollDown();
      this.handleMobileScrollDown();
    } else {
      this.handleScrollUp();
      this.handleMobileScrollUp();
    }
    this.lastScrollTop = currentScrollTop;
  }

  handleScrollDown() {
    if (this.mobileStyle)
      return;

    console.log(this.lastScrollTop);

    if (this.lastScrollTop > 800)
      this.skillsComponent.arrowAnimation = true;

    if (this.lastScrollTop > 1900)
      this.portfolioComponent.arrowAnimation = true;

    if (this.lastScrollTop > 3533)
      this.contactComponent.arrowAnimation = true;
  }

  handleScrollUp() {
    if (this.mobileStyle)
      return;
    console.log(this.lastScrollTop);
    if (this.lastScrollTop < 580)
      this.skillsComponent.arrowAnimation = false;

    if (this.lastScrollTop < 1500)
      this.portfolioComponent.arrowAnimation = false;

    if (this.lastScrollTop < 3000)
      this.contactComponent.arrowAnimation = false;
  }

  handleMobileScrollDown() {
    if (!this.mobileStyle)
      return;

    if (this.lastScrollTop > 1000)
      this.skillsComponent.arrowAnimation = true;

    if (this.lastScrollTop > 1900)
      this.portfolioComponent.arrowAnimation = true;

    if (this.lastScrollTop > 4100)
      this.contactComponent.arrowAnimation = true;
  }

  handleMobileScrollUp() {
    if (!this.mobileStyle)
      return;
    console.log(this.lastScrollTop);

    if (this.lastScrollTop < 650)
      this.skillsComponent.arrowAnimation = false;

    if (this.lastScrollTop < 1500)
      this.portfolioComponent.arrowAnimation = false;

    if (this.lastScrollTop < 3700)
      this.contactComponent.arrowAnimation = false;
  }

  onMouseMove(event: MouseEvent) {
    this.cyrclePosX = event.pageX;
    this.cyrclePosY = event.pageY;
  }
}
