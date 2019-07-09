import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public baseBG = '../assets/images/HomeBG.svg';
  public socialURL = [
    'https://github.com/koalazub',
    'https://www.hackerrank.com/elkoali',
    'https://leetcode.com/cokoali/',
    'https://www.linkedin.com/in/cokoali/'
  ];

  public hoverIcons = [
    '../../assets/images/Icons/GitHubHover.svg',
    '../../assets/images/Icons/HackerrankHover.svg',
    '../../assets/images/Icons/LeetCodeHover.svg',
    '../../assets/images/Icons/LinkedInHover.svg'
  ];

  public staticIcons = [
    '../../assets/images/Icons/github.svg',
    '../../assets/images/Icons/hackerrank.svg',
    '../../assets/images/Icons/leetcode.svg',
    '../../assets/images/Icons/linkedin.svg'
  ];
  mouseover: boolean;

  @HostListener('mouseover')
  public onMouseOver() {
    this.mouseover = true;
  }

  @HostListener('mouseout')
  public onMouseOut() {
    this.mouseover = false;
  }

  public openWindow(newURL: string) {
    window.open(newURL, '_blank');
  }
}



