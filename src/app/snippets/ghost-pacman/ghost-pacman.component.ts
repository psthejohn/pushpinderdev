import { Component, HostListener, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-ghost-pacman',
  templateUrl: './ghost-pacman.component.html',
  styleUrls: ['./ghost-pacman.component.scss']
})
export class GhostPacmanComponent implements OnInit, OnDestroy {
  showGhost = false;
  private idleTimer: any;
  private trailInterval: any;

  ngOnInit() {
    this.resetIdleTimer();
    this.startTrail();
  }

  ngOnDestroy() {
    clearTimeout(this.idleTimer);
    clearInterval(this.trailInterval);
  }

  @HostListener('document:mousemove')
  onMouseMove() {
    this.showGhost = false;
    this.resetIdleTimer();
  }

  private resetIdleTimer() {
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.showGhost = true;
    }, 5000); // 5 seconds idle
  }

private startTrail() {
  // repeatedly spawn trail behind ghost
  this.trailInterval = setInterval(() => {
    if (!this.showGhost) return; // only spawn when ghost visible

    const ghost = document.getElementById('ghost');
    if (!ghost) return;

    const rect = ghost.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - 20; // center minus half trail width
    const y = rect.top + rect.height / 2 - 20; // center minus half trail height

    const trail = document.createElement('div');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);


    // remove trail after 1s
    setTimeout(() => {
      trail.remove();
      console.log('Trail removed'); // debug
    }, 1000);

  }, 80); // spawn trail every 80ms
}

}
