import {Component, OnInit} from '@angular/core';
import {fader} from '../../route-animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [ // <-- add your animations here
    fader,
    // slider,
    // transformer,

  ],
})


export class ResumeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
