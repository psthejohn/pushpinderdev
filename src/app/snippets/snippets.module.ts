import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetsComponent } from './snippets.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { GridComponent } from './tic-tac-toe/grid/grid.component';
import { ResumeComponent } from './resume/resume.component';
import { GhostPacmanComponent } from './ghost-pacman/ghost-pacman.component';

@NgModule({
  declarations: [SnippetsComponent, TicTacToeComponent, GridComponent, ResumeComponent, GhostPacmanComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SnippetsComponent,
    GhostPacmanComponent,
  ]
})
export class SnippetsModule { }
