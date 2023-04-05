import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent {





  @Input() project = {
    img: '',
    title: '',
    technologies: '',
    info: '',
    link: '',
  };

  @Input() projectId = 0;

}
