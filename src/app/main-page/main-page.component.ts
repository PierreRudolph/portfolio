import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  ngOnInit() {
    fetch('https://pierre-lettner.de/invokeCounter.php')
      .catch(error => console.error('Fehler beim Aufruf der Counter-API:', error));
  }

}
