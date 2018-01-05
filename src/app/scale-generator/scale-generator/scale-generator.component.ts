import { Component, OnInit } from '@angular/core';
import { MatTabsModule, MatExpansionModule, MatTab } from '@angular/material';

import { RouterLink } from '@angular/router';

import { Constants } from '../../constants'
import { Enums } from '../../enums'
import { ScalesService } from '../../services/scales.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-scale-generator',
  templateUrl: './scale-generator.component.html',
  styleUrls: ['./scale-generator.component.scss']
})
export class ScaleGeneratorComponent implements OnInit {

  public scales: Object = Constants.scales;
  public scaleSets = Enums.scaleSet;
  public userScaleLists;
  public selectedTab: MatTab;

  constructor(private scaleService: ScalesService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if(user){
        this.scaleService.getUserScaleLists(user.uid)
        .subscribe(userScales => {
          this.userScaleLists = userScales
        })
      }
    })
  }

  public shuffle(scaleSet: number, customScaleList, isCustom: boolean) {
    let currentIndex,
        temporaryValue, 
        randomIndex; 

    if(isCustom){
      currentIndex = customScaleList.scales.length
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = customScaleList.scales[currentIndex];
        customScaleList.scales[currentIndex] = customScaleList.scales[randomIndex];
        customScaleList.scales[randomIndex] = temporaryValue;
      
      }
    }else{
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
}
