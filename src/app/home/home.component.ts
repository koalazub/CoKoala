import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public baseBG = '../assets/images/HomeBG.svg';
  constructor() {
  }

  ngOnInit() {
  }
}
