import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor() {
        this.baseBG = '../assets/images/HomeBG.svg';
        this.socialURL = [
            'https://github.com/koalazub',
            'https://www.hackerrank.com/elkoali',
            'https://leetcode.com/cokoali/',
            'https://www.linkedin.com/in/cokoali/'
        ];
        this.hoverIcons = [
            '../../assets/images/Icons/GitHubHover.svg',
            '../../assets/images/Icons/HackerrankHover.svg',
            '../../assets/images/Icons/LeetCodeHover.svg',
            '../../assets/images/Icons/LinkedInHover.svg'
        ];
        this.staticIcons = [
            '../../assets/images/Icons/github.svg',
            '../../assets/images/Icons/hackerrank.svg',
            '../../assets/images/Icons/leetcode.svg',
            '../../assets/images/Icons/linkedin.svg'
        ];
    }
    onMouseOver() {
        this.mouseover = true;
    }
    onMouseOut() {
        this.mouseover = false;
    }
    openWindow(newURL) {
        window.open(newURL, '_blank');
    }
};
tslib_1.__decorate([
    HostListener('mouseover'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], HomeComponent.prototype, "onMouseOver", null);
tslib_1.__decorate([
    HostListener('mouseout'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], HomeComponent.prototype, "onMouseOut", null);
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss'],
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map