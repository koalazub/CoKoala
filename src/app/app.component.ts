import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fader} from '../route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
  ]
})
export class AppComponent implements OnInit {
  title = 'CoKoala';
  public baseBG = '../../assets/images/DirtyGreyBG.jpg';

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
