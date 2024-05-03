import { Component } from "@angular/core";

@Component({
  selector: "app-snippets",
  templateUrl: "./snippets.component.html",
  styleUrls: ["./snippets.component.scss"],
})
export class SnippetsComponent {
  selectionGame: string = '';
  loading: boolean = false;

  // Array to store game details (name, number, color)
  games: any[] = [
    { name: 'Tic-tac-toe (2P)', number: '0', color: 'tic-tac-toe' },
    { name: 'Rock Paper Scissors (1P)', number: '1', color: 'rps' },
    { name: 'Sudoku', number: '2', color: 'sudoku' },
    { name: 'Snake', number: '3', color: 'snake' },
    { name: 'Ladder & Snake', number: '4', color: 'ladder-snake' },
    { name: 'Ludo', number: '5', color: 'ludo' },
    { name: 'Show Resume', number: '6', color: 'resume' },
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
