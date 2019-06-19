import {Component} from '@angular/core';
import * as tslib_1 from "tslib";

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.MyName = 'Ali El Ali';
      this.Resume = 'Resume';
      this.WorkPieces = 'Work Pieces';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
export { NavComponent };
//# sourceMappingURL=nav.component.js.map
