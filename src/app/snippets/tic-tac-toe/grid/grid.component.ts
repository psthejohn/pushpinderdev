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
  winningCase: string = '';

  constructor() {}

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
    this.winningBroker = false;
    this.winningCase = '';
  }

  winningAlgorithm() {
    this.diagonalWin = 0;
    this.colWin = [0, 0, 0];

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      // Row winning case
      if (
        this.previousSelection[rowIdx].every((col) => col === this.previousSelection[rowIdx][0]) &&
        this.previousSelection[rowIdx][0] !== ''
      ) {
        this.winningBroker = true;
        this.winningCase = this.previousSelection[rowIdx][0];
        break;
      }

      for (let colIdx = 0; colIdx < 3; colIdx++) {
        // Diagonal winning case
        if (rowIdx === colIdx && this.previousSelection[rowIdx][colIdx] === 'X') {
          this.diagonalWin++;
        } else if (rowIdx === colIdx && this.previousSelection[rowIdx][colIdx] === 'O') {
          this.diagonalWin--;
        }

        // Column winning case
        if (this.previousSelection[rowIdx][colIdx] === 'X') {
          this.colWin[colIdx]++;
        } else if (this.previousSelection[rowIdx][colIdx] === 'O') {
          this.colWin[colIdx]--;
        }
      }
    }

    // Reverse Diagonal case **** SPECIAL CASE ****
    if (
      this.previousSelection[0][2] === this.previousSelection[1][1] &&
      this.previousSelection[1][1] === this.previousSelection[2][0] &&
      (this.previousSelection[1][1] === 'X' || this.previousSelection[1][1] === 'O') &&
      this.previousSelection[0][1] !== ''
    ) {
      this.winningBroker = true;
      this.winningCase = this.previousSelection[1][1];
    }

    if (this.diagonalWin === 3 || this.diagonalWin === -3) {
      this.winningBroker = true;
      this.winningCase = this.diagonalWin > 0 ? 'X' : 'O';
    }

    if (this.colWin.includes(3) || this.colWin.includes(-3)) {
      this.winningBroker = true;
      this.winningCase = this.colWin.indexOf(3) !== -1 ? 'X' : 'O';
    }
  }
}
