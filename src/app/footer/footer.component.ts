import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  mobileStyle = false;
  headerMenuActive = false;
  legalNoticeShowing: boolean = false;
  @Output() legalNoticeShowingToEmit = new EventEmitter<boolean>();

  constructor() {
    this.checkScreenSize();
  }


  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.mobileStyle = window.innerWidth < 500;
  }

  toggleLegalNotice() {
    this.legalNoticeShowingToEmit.emit(this.legalNoticeShowing);
    this.legalNoticeShowing = !this.legalNoticeShowing;
  }
}
