import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  constructor(public scroll: ViewportScroller) {

  }


  ngOnInit(): void {
    this.scroll.scrollToAnchor("top");
  }
}
