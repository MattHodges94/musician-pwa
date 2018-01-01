import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { RouterLink } from '@angular/router';

import { Constants } from '../../constants'
import { Enums } from '../../enums'

@Component({
  selector: 'app-scale-generator',
  templateUrl: './scale-generator.component.html',
  styleUrls: ['./scale-generator.component.scss']
})
export class ScaleGeneratorComponent implements OnInit {

  public scales: Object = Constants.scales;
  public scaleSets = Enums.scaleSet;
  constructor() { }

  ngOnInit() {
  }

  public shuffle(scaleSet: number) {
    let currentIndex,
        temporaryValue, 
        randomIndex; 

    currentIndex = this.scales[this.scaleSets[scaleSet]].length
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.scales[this.scaleSets[scaleSet]][currentIndex];
      this.scales[this.scaleSets[scaleSet]][currentIndex] = this.scales[this.scaleSets[scaleSet]][randomIndex];
      this.scales[this.scaleSets[scaleSet]][randomIndex] = temporaryValue;
      
    }

  }
}
