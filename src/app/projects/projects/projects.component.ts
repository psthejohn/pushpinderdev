import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent { selectionGame: string = '';
loading: boolean = false;

// Array to store game details (name, number, color)
games: any[] = [
  { name: 'JIRA', number: '0', color: 'tic-tac-toe' },
  { name: 'Codify', number: '1', color: 'rps' },
  { name: 'Docker', number: '2', color: 'sudoku' },
  { name: 'Kafka', number: '3', color: 'snake' },
  { name: 'Splitwise', number: '4', color: 'ladder-snake' },
  { name: 'Discord', number: '5', color: 'ludo' },
  { name: 'Video Call', number: '6', color: 'resume' },
];

constructor() {}

// Declare the method as public
public getGameName(gameNumber: string): string {
  const selectedGame = this.games.find(game => game.number === gameNumber);
  return selectedGame ? selectedGame.name : '';
}

showGame(selectedGame: string) {
  // Disable click if already selected
  if (this.selectionGame === selectedGame) {
    return;
  }else{
    this.selectionGame='';
  }

  this.loading = true;
  setTimeout(() => {
    this.selectionGame = selectedGame;
    this.loading = false;
  }, 2000);
}
}
