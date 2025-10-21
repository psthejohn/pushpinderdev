import * as WordCloud from 'wordcloud';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.generateWordCloud();
  }

  generateWordCloud(): void {
    // A comprehensive list of words with their corresponding weights
    const wordList = [
      ['Angular', 12],
      ['TypeScript', 6],
      ['WordCloud', 15],
      ['JavaScript', 10],
      ['npm', 5],
      ['Canvas', 8],
      ['HTML', 7],
      ['CSS', 9],
      ['Component', 11],
      ['Service', 4],
      ['RXJS', 7],
      ['Routing', 6],
      ['Modules', 5],
      ['Directives', 8],
      ['Frontend', 13],
      ['Web', 9],
      ['Development', 11],
      ['CLI', 7],
      ['Testing', 4],
      ['Firebase', 6],
      ['NgRx', 9]
    ];

    // Additional options for the word cloud can be added here
    // See the wordcloud.js documentation for a full list of options
    const options = {
      list: wordList,
      gridSize: 10, // The grid size for positioning words
      weightFactor: 5, // The ratio between word weight and font size
      fontFamily: 'Finger Paint, cursive, sans-serif',
      color: 'random-dark',
      backgroundColor: '#f0f0f0',
      minRotation: -Math.PI / 6,
      maxRotation: Math.PI / 6,
      rotateRatio: 0.5
    };

    WordCloud(this.myCanvas.nativeElement, options);
  }
}
