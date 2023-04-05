import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  project = {
    img: '',
    title: '',
    technologies: '',
    info: '',
    link: '',
  }

  projects = [{
    img: 'join.svg',
    title: 'Join',
    technologies: 'Angular | TypeScript | HTML CSS | Firebase',
    info: 'Task manager inspired by the Kanban System. Create an organize tasks using drag and drop functions, assign users and categories.',
    link: ''

  }, {
    img: 'pokedex.svg',
    title: 'Pokedex',
    technologies: 'JavaScript | HTML | CSS | Api',
    info: 'Based on the PokéAPI a simple library that provides and catalouges pokemon information.',
    link: ''
  }]
}
