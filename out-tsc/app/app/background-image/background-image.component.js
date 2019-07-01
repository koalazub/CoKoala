import {Component} from '@angular/core';
import * as tslib_1 from "tslib";

let BackgroundImageComponent = class BackgroundImageComponent
  {
    constructor()
      {
        this.bgURL = '../../assets/images/DirtyGreyBG.jpg';
      }

    ngOnInit()
      {
      }

    addGreyBG(image)
      {
        return {
          'background-image': image
        };
      }
  };
BackgroundImageComponent = tslib_1.__decorate([
  Component({
        selector: 'app-background-image',
        templateUrl: './background-image.component.html',
        styleUrls: ['./background-image.component.scss']
  }),
  tslib_1.__metadata("design:paramtypes", [])
], BackgroundImageComponent);
export {BackgroundImageComponent};
//# sourceMappingURL=background-image.component.js.map
