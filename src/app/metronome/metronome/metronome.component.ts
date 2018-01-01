import { Component, OnInit, OnDestroy } from '@angular/core';


 
@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})
export class MetronomeComponent implements OnInit, OnDestroy {
  //init to 30bpm 
  //interval = 60,000 / x bpm
  private interval: number = 60000 / 30;
  public hasStarted: boolean = false;
  private metronomeTick = new Audio('./assets/audio/tick.mp3');
  private intervalTimeout;

  constructor() { }

  ngOnInit() {
  }


  ngOnDestroy(){
    this.stopMetronome();
  }

  public changeTempo(tempo: number){
    if(tempo > 0 && tempo < 151){
      this.interval = 60000 / tempo;
    }
    if(this.hasStarted){
      clearTimeout(this.intervalTimeout)
      this.startMetronome()
    }
  }

  public startMetronome(){
    this.hasStarted = true;
    this.metronomeTick.play();
    this.intervalTimeout = setTimeout(() => {
     this.startMetronome()
    }, this.interval)
  }

  public stopMetronome(){
    this.hasStarted = false
    clearTimeout(this.intervalTimeout)
  }

}
