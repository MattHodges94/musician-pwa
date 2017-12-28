import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { RouterLink } from '@angular/router';

import { Constants } from '../../constants'

@Component({
  selector: 'app-scale-generator',
  templateUrl: './scale-generator.component.html',
  styleUrls: ['./scale-generator.component.scss']
})
export class ScaleGeneratorComponent implements OnInit {

  public majorScales: Array<Object> = Constants.majorScales;
  public minorScales: Array<Object> = Constants.minorScales;
  public allScales: Array<Object> = Constants.allScales;
  public scaleSets = Constants.scaleSet;
  constructor() { }

  ngOnInit() {
  }

  public shuffle(scaleSet: number) {
    let currentIndex,
        temporaryValue, 
        randomIndex; 
    if(scaleSet == this.scaleSets.majorScales || scaleSet == this.scaleSets.minorScales){
      currentIndex = this.majorScales.length
    } else {
      currentIndex = this.allScales.length
    }
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      if(scaleSet == this.scaleSets.majorScales){
        temporaryValue = this.majorScales[currentIndex];
        this.majorScales[currentIndex] = this.majorScales[randomIndex];
        this.majorScales[randomIndex] = temporaryValue;
      } else if(scaleSet == this.scaleSets.minorScales) {
        temporaryValue = this.minorScales[currentIndex];
        this.minorScales[currentIndex] = this.minorScales[randomIndex];
        this.minorScales[randomIndex] = temporaryValue;
      } else if(scaleSet == this.scaleSets.allScales){
        temporaryValue = this.allScales[currentIndex];
        this.allScales[currentIndex] = this.allScales[randomIndex];
        this.allScales[randomIndex] = temporaryValue;
      }
    }
  }

}
