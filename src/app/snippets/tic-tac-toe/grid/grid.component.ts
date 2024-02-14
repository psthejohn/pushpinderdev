import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  previousSelection: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  diagonalWin = 0;
  colWin: number[] = [0, 0, 0];
  lastElement: string = '';
  winningBroker: boolean = false;
  winningCase :string  = ''

  constructor() {}

  // TO BE IMPLEMENTED ---> prevent reselection !!!! IMPORTANT
  boxSelection(row: number, column: number) {
    if (this.previousSelection[row][column] === '' && !this.winningBroker) {
      if (this.lastElement === '' || this.lastElement === 'O') {
        this.lastElement = 'X';
        this.previousSelection[row][column] = 'X';
      } else {
        this.lastElement = 'O';
        this.previousSelection[row][column] = 'O';
      }
      this.winningAlgorithm();
    }
  }

  resetGame() {
    this.previousSelection = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.lastElement = '';
    this.colWin = [0, 0, 0];
    this.winningBroker = false
  }

  winningAlgorithm() {
    this.diagonalWin = 0;
    this.colWin = [0, 0, 0]
    this.previousSelection.map((row, rowIdx) => {
      // row winning case
      row.every((col) => col === row[0]) && row[0] != '' ? (this.winningBroker = true)  : '';

      // same column case
      row.map((col, colIdx) => {
        // diagonal winning case
        rowIdx === colIdx && this.previousSelection[rowIdx][colIdx] === 'X' ? this.diagonalWin++ : rowIdx === colIdx && this.previousSelection[rowIdx][colIdx] === 'O' ? this.diagonalWin++ : '';
        // column winning case
        this.previousSelection[rowIdx][colIdx] === 'X' ? this.colWin[colIdx]++ : this.previousSelection[rowIdx][colIdx] === 'O' ? this.colWin[colIdx]-- : '';
      });
    });

     // Reverse Diagonal case **** SPECIAL CASE ****
     this.previousSelection[0][2] === this.previousSelection[1][1] && this.previousSelection[1][1] === this.previousSelection[2][0] && (this.previousSelection[1][1]==='X' || this.previousSelection[1][1]==='O' ) && this.previousSelection[0][1]!=''? this.winningBroker=true : ''


    console.log('diagonal win here ===> ',this.diagonalWin)
    this.diagonalWin === 3 || this.diagonalWin === -3
      ? (this.winningBroker = true)
      : '';

    this.colWin.find((el) => el === 3)
      ? (this.winningBroker = true)
      : this.colWin.find((el) => el === -3)
      ? (this.winningBroker = true)
      : '';

    console.log('column win case ====> ', this.colWin);
  }
}
