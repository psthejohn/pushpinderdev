import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetsComponent } from './snippets.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { GridComponent } from './tic-tac-toe/grid/grid.component';

@NgModule({
  declarations: [SnippetsComponent, TicTacToeComponent, GridComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SnippetsComponent
  ]
})
export class SnippetsModule { }
