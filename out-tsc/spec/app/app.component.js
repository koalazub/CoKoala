import {Component} from '@angular/core';
import * as tslib_1 from "tslib";
import {fader} from '../route-animations';

let AppComponent = class AppComponent
  {
    constructor()
      {
        this.title = 'CoKoala';
        this.baseBG = '../../assets/images/DirtyGreyBG.jpg';
    }

    ngOnInit()
      {
      }

    prepareRoute(outlet)
      {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
      }
  };
AppComponent = tslib_1.__decorate([
  Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
      fader,
    ]
  })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
