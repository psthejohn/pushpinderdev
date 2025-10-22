import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pushpinderdev';
  ngOnInit(): void {
  const cursor = document.querySelector('.custom-cursor') as HTMLElement;
  const ring = document.querySelector('.cursor-ring') as HTMLElement;

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursor.style.top = `${clientY}px`;
    cursor.style.left = `${clientX}px`;
    ring.style.top = `${clientY}px`;
    ring.style.left = `${clientX}px`;
  });

  // Optional: subtle scale pulse on click
  document.addEventListener('click', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
    ring.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 150);
  });
}

}
