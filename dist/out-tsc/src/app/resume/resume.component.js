import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { fader } from '../../route-animations';
let ResumeComponent = class ResumeComponent {
    constructor() {
        this.baseBG = '../assets/images/HomeBG.svg';
    }
    ngOnInit() {
    }
};
ResumeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-resume',
        templateUrl: './resume.component.html',
        styleUrls: ['./resume.component.scss'],
        animations: [
            fader,
        ],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ResumeComponent);
export { ResumeComponent };
//# sourceMappingURL=resume.component.js.map