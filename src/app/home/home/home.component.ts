import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadResume(): void {
    console.log('---------downloading resume ---------');
    const pdfPath = 'assets/static/Pushpinder Singh - SDE - RESUME.pdf'; // Adjust the path based on your project structure
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Pushpinder Singh - SDE - RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
