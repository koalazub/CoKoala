import {Component} from '@angular/core';
import * as tslib_1 from "tslib";

var BackgroundImageComponent = /** @class */ (function ()
  {
    function BackgroundImageComponent()
      {
        this.bgURL = "../../assets/images/DirtyGreyBG.jpg";
      }

    BackgroundImageComponent.prototype.ngOnInit = function ()
      {
      };
    BackgroundImageComponent.prototype.addGreyBG = function (string)
      {
        return {
          'background-image': string
        };
      };
    BackgroundImageComponent = tslib_1.__decorate([
      Component({
        selector: 'app-background-image',
        templateUrl: './background-image.component.html',
        styleUrls: ['./background-image.component.scss']
      }),
      tslib_1.__metadata("design:paramtypes", [])
    ], BackgroundImageComponent);
    return BackgroundImageComponent;
  }());
export {BackgroundImageComponent};
//# sourceMappingURL=background-image.component.js.map
