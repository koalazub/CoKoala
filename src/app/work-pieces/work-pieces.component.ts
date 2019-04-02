import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-pieces',
  templateUrl: './work-pieces.component.html',
  styleUrls: ['./work-pieces.component.scss']
})
export class WorkPiecesComponent implements OnInit {

  ConstructionSrc = '../../assets/images/CoKoala_logo_06_B&W03.png';
  PortfolioOverview: 'Portfolio Overview';

  constructor() {
  }

  ngOnInit() {
  }

}

