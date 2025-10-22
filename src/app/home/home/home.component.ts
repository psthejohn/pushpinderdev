import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  skills = [
    { name: 'Angular', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'Spring Boot', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 60 },
  ];

  ngOnInit(): void {}

  downloadResume(): void {
    console.log('---------downloading resume ---------');
    const pdfPath =
      'assets/static/Pushpinder_Singh_Java_Full_Stack_Developer_Resume-1.pdf'; // Adjust the path based on your project structure
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Pushpinder_Singh_Java_Full_Stack_Developer_Resume-1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
