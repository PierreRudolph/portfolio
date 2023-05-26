import { Element } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export default class MySkillsComponent {
  public arrowAnimation: boolean = false;
}
