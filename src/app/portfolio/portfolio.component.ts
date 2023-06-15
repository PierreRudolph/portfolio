import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  arrowAnimation: boolean = false;
  project = {
    img: '',
    title: '',
    technologies: '',
    info: '',
    link: '',
  }

  projects = [{
    img: 'join1.png',
    title: 'Join',
    technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
    info: 'Task manager inspired by the Kanban System. Create an organize tasks using drag and drop functions, assign users and categories.',
    link: ''

  }, {
    img: 'pokedex.png',
    title: 'Pokedex',
    technologies: 'JavaScript | HTML | CSS | Api',
    info: 'Based on the PokéAPI a simple library that provides and catalouges pokemon information.',
    link: ''
  }, {
    img: 'pollo-loco.png',
    title: 'El Pollo Loco',
    technologies: 'JavaScript | HTML | CSS | OOP',
    info: 'Jump and Run Game',
    link: ''
  }, {
    img: 'fire.png',
    title: 'Ring Of Fire',
    technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
    info: 'Firebase WebApp, based on the popular drinking Game, with own unique Style.',
    link: ''
  }, {
    img: 'tic-tac-toe.png',
    title: 'Tic Tac Toe',
    technologies: 'JavaScript | HTML | CSS',
    info: 'Classic Tic Tac Toe game, with self Concipated and Programmed Computer Enemy',
    link: ''
  }]
}
