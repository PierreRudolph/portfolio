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
    projectLink: '',
    gitHubLink: ''
  }

  projects = [{
    img: 'join.png',
    title: 'Join',
    technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
    info: 'Task manager inspired by the Kanban System. Create an organize tasks using drag and drop functions, assign users and categories.',
    projectLink: 'https://pierre-lettner.de/Join/index.html',
    gitHubLink: 'https://github.com/PierreRudolph/Join'
  }, {
    img: 'pokedex.png',
    title: 'Pokedex',
    technologies: 'JavaScript | HTML | CSS | Api',
    info: 'Based on the PokéAPI a simple library that provides and catalouges pokemon information.',
    projectLink: 'https://pierre-lettner.de/Pokedex/index.html',
    gitHubLink: 'https://github.com/PierreRudolph/Pokedex'
  }, {
    img: 'pollo-loco.png',
    title: 'El Pollo Loco',
    technologies: 'JavaScript | HTML | CSS | OOP',
    info: 'Jump and Run Game',
    projectLink: 'https://pierre-lettner.de/El-Pollo-Loco/index.html',
    gitHubLink: 'https://github.com/PierreRudolph/Ell_Polo_loco'
  }, {
    img: 'tic-tac-toe.png',
    title: 'Tic Tac Toe',
    technologies: 'JavaScript | HTML | CSS',
    info: 'Classic Tic Tac Toe game, with self Concipated and Programmed Computer Enemy',
    projectLink: 'https://pierre-lettner.de/Tic-Tac-Toe/index.html',
    gitHubLink: 'https://github.com/PierreRudolph/TicTacToe'
  }]
}
