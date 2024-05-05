import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  selectionProject: string = '';
  loading: boolean = false;

  // Array to store project details (name, number, color, url)
  projects: any[] = [
    { name: 'JIRA', number: '0', color: 'tic-tac-toe' },
    {
      name: 'Codify',
      number: '1',
      color: 'rps',
      url: 'https://codify-studio.netlify.app/',
    },
    { name: 'Docker', number: '2', color: 'sudoku' },
    { name: 'Kafka', number: '3', color: 'snake' },
    { name: 'Splitwise', number: '4', color: 'ladder-snake' },
    { name: 'Discord', number: '5', color: 'ludo' },
    { name: 'Video Call', number: '6', color: 'resume' },
  ];

  constructor() {}

  showProject(selectedProject: any) {
    if (selectedProject.name === 'Codify') {
      window.open(selectedProject.url, '_blank');
    } else {
      if (this.selectionProject === selectedProject.name) {
        return;
      } else {
        this.selectionProject = '';
      }

      this.loading = true;
      this.selectionProject = selectedProject.name;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
}
