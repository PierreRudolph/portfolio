import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  cyrclePosX: number = 0;
  cyrclePosY: number = 0;

  onMouseMove(event: MouseEvent) {
    this.cyrclePosX = event.pageX;
    this.cyrclePosY = event.pageY;
  }

}
