import { Time } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  hrs: any = 0;
  mins: any = 0;
  secs: any = 0;
  milli: any = 0;

  currentTimer:number = 0;
  interval: any;

  snapshots: any = [];

  constructor() { }

  ngOnInit(): void {
  }


  start() {
    this.timeReturn();
  }

  pause() {
    return clearInterval(this.interval)
  }

  reset() {
    this.hrs = 0;
    this.mins = 0;
    this.secs = 0;
    this.milli = 0;
    this.currentTimer = 0 ;
    this.snapshots = []
  }

  snapshot() {
    this.snapshots.push(this.currentTimer);
  }

  timeReturn() {
    this.interval = setInterval(() => this.currentTimer++, 1000);
    return this.interval
  }

  clockTimeGenerator(){
    if(this.currentTimer<1000 && this.currentTimer<0){
      this.milli++;
    }
  }
}