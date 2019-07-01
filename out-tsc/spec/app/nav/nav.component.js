import {Component} from '@angular/core';
import * as tslib_1 from "tslib";

let NavComponent = class NavComponent
  {
    constructor()
      {
        this.MyName = 'Ali El Ali';
        this.Resume = 'Resume';
        this.WorkPieces = 'Projects';
    }

    ngOnInit()
      {
      }
  };
NavComponent = tslib_1.__decorate([
  Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
  }),
  tslib_1.__metadata("design:paramtypes", [])
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map
