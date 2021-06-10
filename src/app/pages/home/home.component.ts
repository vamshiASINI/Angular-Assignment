import { Component, OnInit, HostListener } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'open-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  pemi = {
    value: 25
  }
  remi = {
    value: 25
  }
  poptions: Options = {
    floor: 1,
    ceil: 200,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>L</b>';
        case LabelType.High:
          return value + '<b>L</b>';
        default:
          return value + '<b>L</b>';
      }
    }
  };
  roptions: Options = {
    floor: 1,
    ceil: 200,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>L</b>';
        case LabelType.High:
          return value + '<b>L</b>';
        default:
          return value + '<b>L</b>';
      }
    }
  };
  public isScrolling: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log("Button Clicked");
  }

}
