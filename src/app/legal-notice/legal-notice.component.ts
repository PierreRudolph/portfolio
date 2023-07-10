import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  constructor(private scroll: ViewportScroller) {

  }

  ngOnInit(): void {
    this.scroll.scrollToPosition([0, 0]);
  }
}
