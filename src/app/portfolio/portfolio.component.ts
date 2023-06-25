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
    img: 'join.png',
    title: 'Join',
    technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
    info: 'Task manager inspired by the Kanban System. Create an organize tasks using drag and drop functions, assign users and categories.',
    link: 'https://pierre-lettner.de/Join/index.html'

  }, {
    img: 'pokedex.png',
    title: 'Pokedex',
    technologies: 'JavaScript | HTML | CSS | Api',
    info: 'Based on the PokéAPI a simple library that provides and catalouges pokemon information.',
    link: 'https://pierre-lettner.de/Pokedex/index.html'
  }, {
    img: 'pollo-loco.png',
    title: 'El Pollo Loco',
    technologies: 'JavaScript | HTML | CSS | OOP',
    info: 'Jump and Run Game',
    link: 'https://pierre-lettner.de/El-Pollo-Loco/index.html'
  }, {
    img: 'fire.png',
    title: 'Ring Of Fire',
    technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
    info: 'Firebase WebApp, based on the popular drinking Game, with own unique Style.',
    link: 'https://pierre-lettner.de/Ring-of-Fire/index.html'
  }, {
    img: 'tic-tac-toe.png',
    title: 'Tic Tac Toe',
    technologies: 'JavaScript | HTML | CSS',
    info: 'Classic Tic Tac Toe game, with self Concipated and Programmed Computer Enemy',
    link: 'https://pierre-lettner.de/Tic-Tac-Toe/index.html'
  }]
}
