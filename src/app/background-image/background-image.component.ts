import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss']
})
export class BackgroundImageComponent implements OnInit {

  bgURL = '../../assets/images/DirtyGreyBG.jpg';

  constructor() {
  }

  ngOnInit() {
  }

  public addGreyBG(image: string) {
    return {
      'background-image': image
    };
  }

}
